const express    = require('express');
const cors       = require('cors');
const nodemailer = require('nodemailer');
const fs         = require('fs');
const path       = require('path');

// Load .env for local development (Render/Railway use their own env vars)
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, 'utf8').split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const idx = trimmed.indexOf('=');
    if (idx === -1) return;
    const key = trimmed.slice(0, idx).trim();
    const val = trimmed.slice(idx + 1).trim();
    if (!process.env[key]) process.env[key] = val; // don't override host env vars
  });
}

const app = express();

// ── Middleware ─────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Read credentials from env (Railway sets these via Variables tab) ──
const OWNER_EMAIL  = process.env.OWNER_EMAIL  || 'shriparamhansinternational@gmail.com';
const APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || '';
const emailReady   = !!APP_PASSWORD && APP_PASSWORD !== 'your_16_character_app_password_here';

// ── POST /api/contact ──────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  const record = {
    id:        Date.now(),
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    name,
    email,
    phone:   phone   || 'Not provided',
    company: company || 'Not provided',
    subject: subject || 'General Inquiry',
    message,
  };

  // Save to submissions.json
  const file = path.join(__dirname, 'submissions.json');
  let all = [];
  if (fs.existsSync(file)) {
    try { all = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { all = []; }
  }
  all.push(record);
  fs.writeFileSync(file, JSON.stringify(all, null, 2));
  console.log(`📬 New inquiry — ${name} <${email}>`);

  if (emailReady) {
    // Send email in background — don't block the response
    setImmediate(async () => {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // STARTTLS — works on Render free tier
          auth: { user: OWNER_EMAIL, pass: APP_PASSWORD },
        });
        await transporter.sendMail({
          from:    `"SPI Website" <${OWNER_EMAIL}>`,
          to:      OWNER_EMAIL,
          subject: `🔔 New Inquiry from ${name} — ${record.subject}`,
          html:    ownerHTML(record),
        });
        await transporter.sendMail({
          from:    `"Shri Paramhans International" <${OWNER_EMAIL}>`,
          to:      email,
          subject: `Thank you for contacting SPI — We'll respond within 24 hours`,
          html:    replyHTML(record),
        });
        console.log(`✅ Emails sent`);
      } catch (err) {
        console.error(`❌ Email error: ${err.message}`);
      }
    });
  }

  // Respond immediately — don't wait for email
  return res.status(200).json({ success: true, message: 'Message received. We will get back to you within 24 hours.' });
});

// ── GET /api/health ────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'running', emailConfigured: emailReady });
});

// ── GET /api/submissions ───────────────────────────────
app.get('/api/submissions', (_req, res) => {
  const file = path.join(__dirname, 'submissions.json');
  if (!fs.existsSync(file)) return res.json({ total: 0, submissions: [] });
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  res.json({ total: data.length, submissions: data });
});

// ── Start — Railway requires 0.0.0.0 and uses $PORT ───
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ SPI Backend running on port ${PORT}`);
  console.log(`   Email: ${emailReady ? 'configured' : 'NOT configured'}`);
});

// ── Email Templates ────────────────────────────────────

function ownerHTML(s) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    body{font-family:Arial,sans-serif;background:#f0f2f5;margin:0;padding:20px}
    .wrap{max-width:580px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.12)}
    .hdr{background:linear-gradient(135deg,#0a1628,#1a3a6b);padding:28px 36px;text-align:center}
    .hdr h1{color:#c9a84c;font-size:18px;letter-spacing:3px;margin:0 0 4px}
    .hdr p{color:rgba(255,255,255,.55);font-size:12px;margin:0}
    .body{padding:32px 36px}
    .alert{background:#fff8e1;border:1px solid #c9a84c;border-radius:6px;padding:12px 16px;margin-bottom:24px;font-size:13px;color:#7a5c00}
    .row{margin-bottom:16px}
    .lbl{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#c9a84c;margin-bottom:3px}
    .val{font-size:14px;color:#0a1628;font-weight:500}
    .val a{color:#1a3a6b;text-decoration:none}
    hr{border:none;border-top:1px solid #eee;margin:20px 0}
    .msg{background:#f8f9fc;border-left:4px solid #c9a84c;padding:14px 18px;font-size:13px;color:#333;line-height:1.7;white-space:pre-wrap;border-radius:0 6px 6px 0}
    .btn{display:inline-block;margin-top:20px;padding:12px 26px;background:linear-gradient(135deg,#c9a84c,#e8c96a);color:#0a1628;font-weight:700;font-size:13px;border-radius:6px;text-decoration:none}
    .ftr{background:#0a1628;padding:16px 36px;text-align:center}
    .ftr p{color:rgba(255,255,255,.3);font-size:11px;margin:0}
  </style></head><body>
  <div class="wrap">
    <div class="hdr"><h1>NEW INQUIRY — SPI</h1><p>Shri Paramhans International Website</p></div>
    <div class="body">
      <div class="alert">🔔 You have a new contact form submission.</div>
      <div class="row"><div class="lbl">Name</div><div class="val">${s.name}</div></div>
      <div class="row"><div class="lbl">Email</div><div class="val"><a href="mailto:${s.email}">${s.email}</a></div></div>
      <div class="row"><div class="lbl">Phone</div><div class="val">${s.phone}</div></div>
      <div class="row"><div class="lbl">Company</div><div class="val">${s.company}</div></div>
      <div class="row"><div class="lbl">Subject</div><div class="val">${s.subject}</div></div>
      <div class="row"><div class="lbl">Received</div><div class="val">${s.timestamp} IST</div></div>
      <hr>
      <div class="row"><div class="lbl">Message</div><div class="msg">${s.message}</div></div>
      <a class="btn" href="mailto:${s.email}?subject=Re: ${s.subject}">Reply to ${s.name} →</a>
    </div>
    <div class="ftr"><p>© ${new Date().getFullYear()} Shri Paramhans International (SPI)</p></div>
  </div></body></html>`;
}

function replyHTML(s) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    body{font-family:Arial,sans-serif;background:#f0f2f5;margin:0;padding:20px}
    .wrap{max-width:580px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.12)}
    .hdr{background:linear-gradient(135deg,#0a1628,#1a3a6b);padding:36px;text-align:center}
    .hdr h1{color:#c9a84c;font-size:22px;letter-spacing:3px;margin:0 0 6px}
    .hdr p{color:rgba(255,255,255,.5);font-size:12px;margin:0}
    .body{padding:36px}
    .body h2{color:#0a1628;font-size:18px;margin:0 0 14px}
    .body p{color:#555;font-size:14px;line-height:1.8;margin:0 0 14px}
    .box{background:#f8f9fc;border:1px solid #e2e8f0;border-radius:8px;padding:18px 22px;margin:18px 0}
    .box p{font-size:13px;color:#444;margin:0 0 7px}
    .box strong{color:#0a1628}
    .body a{color:#1a3a6b;font-weight:600;text-decoration:none}
    .sig{margin-top:24px;padding-top:18px;border-top:1px solid #eee;font-size:13px;color:#888;line-height:1.7}
    .sig strong{color:#0a1628;font-size:14px}
    .ftr{background:#0a1628;padding:20px 36px;text-align:center}
    .ftr p{color:rgba(255,255,255,.3);font-size:11px;margin:3px 0}
    .ftr a{color:#c9a84c;text-decoration:none}
  </style></head><body>
  <div class="wrap">
    <div class="hdr"><h1>SPI</h1><p>Shri Paramhans International — Core of Professionals</p></div>
    <div class="body">
      <h2>Thank you, ${s.name}!</h2>
      <p>We have received your inquiry and will respond within <strong>24 business hours</strong>.</p>
      <div class="box">
        <p><strong>Submission Summary</strong></p>
        <p><strong>Name:</strong> ${s.name}</p>
        <p><strong>Company:</strong> ${s.company}</p>
        <p><strong>Subject:</strong> ${s.subject}</p>
        <p><strong>Received:</strong> ${s.timestamp} IST</p>
      </div>
      <p>For urgent requirements, contact us directly:</p>
      <p>📞 <a href="tel:+919872273080">+91 98722 73080</a></p>
      <p>✉️ <a href="mailto:shriparamhansinternational@gmail.com">shriparamhansinternational@gmail.com</a></p>
      <div class="sig">Warm regards,<br><strong>Balwinder Singh</strong><br>Shri Paramhans International (SPI)<br>Punjab, India</div>
    </div>
    <div class="ftr">
      <p>© ${new Date().getFullYear()} Shri Paramhans International (SPI)</p>
      <p><a href="mailto:shriparamhansinternational@gmail.com">shriparamhansinternational@gmail.com</a></p>
    </div>
  </div></body></html>`;
}
