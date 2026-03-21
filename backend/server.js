const express    = require('express');
const cors       = require('cors');
const nodemailer = require('nodemailer');
const fs         = require('fs');
const path       = require('path');

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
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
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
  }

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
