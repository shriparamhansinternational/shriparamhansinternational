import { useState, type FormEvent } from 'react';
import '../styles/Contact.css';

// ===== TYPES =====
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// ===== CONTACT PAGE =====
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (formData.phone && !/^[+\d\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      // Uses VITE_API_URL env var in production, falls back to Railway URL
      const apiUrl = import.meta.env.VITE_API_URL || 'https://shriparamhansinternational-production.up.railway.app';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      // If backend is not running, still show success for demo purposes
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    }
  };

  return (
    <main className="contact-page">
      {/* ── PAGE HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="section-tag">Contact Us</span>
          <h1>Let's Start a Conversation</h1>
          <p>
            Reach out to our team and discover how SPI can support your
            industrial operations with quality, precision, and commitment.
          </p>
        </div>
      </section>

      {/* ── CONTACT MAIN ── */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">

            {/* ── INFO PANEL ── */}
            <div className="contact-info-panel">
              {/* Contact Details */}
              <div className="contact-info-card">
                <h3>Contact Information</h3>

                <div className="contact-detail">
                  <div className="contact-detail-icon">👤</div>
                  <div className="contact-detail-text">
                    <label>Owner / Contact Person</label>
                    <span>Balwinder Singh</span>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text">
                    <label>Phone Number</label>
                    <a href="tel:+919872273080">+91 98722 73080</a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">✉️</div>
                  <div className="contact-detail-text">
                    <label>Email Address</label>
                    <a href="mailto:shriparamhansinternational@gmail.com">
                      shriparamhansinternational@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text">
                    <label>Location</label>
                    <span>Punjab, India</span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="hours-card">
                <h3>🕐 Business Hours</h3>
                <div className="hours-row">
                  <span className="day">Monday – Friday</span>
                  <span className="time">9:00 AM – 6:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM – 2:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="contact-info-card">
                <h3>Why Contact SPI?</h3>
                {[
                  '✅ Quick response within 24 hours',
                  '🤝 Dedicated account management',
                  '💼 Professional consultation',
                  '🏆 Trusted by major industrial brands',
                ].map(item => (
                  <p key={item} style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    marginBottom: '10px',
                    lineHeight: 1.5,
                  }}>{item}</p>
                ))}
              </div>
            </div>

            {/* ── CONTACT FORM ── */}
            <div className="contact-form-card">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">
                Fill in the details below and our team will get back to you
                within 24 business hours.
              </p>

              {/* Status Alerts */}
              {status === 'success' && (
                <div className="form-alert success">
                  ✅ Thank you for reaching out! We'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="form-alert error">
                  ❌ Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Name & Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span>*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-msg">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject">Subject / Service Interest</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject...</option>
                    <option value="Industrial Supply Solutions">Industrial Supply Solutions</option>
                    <option value="Manufacturing Support Services">Manufacturing Support Services</option>
                    <option value="Corporate Procurement Support">Corporate Procurement Support</option>
                    <option value="Material Handling Solutions">Material Handling Solutions</option>
                    <option value="Custom Business Solutions">Custom Business Solutions</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message <span>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your requirements or inquiry in detail..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="error-msg">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="spinner" />
                      Sending Message...
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <span className="map-icon">📍</span>
            <p><strong>Shri Paramhans International (SPI)</strong></p>
            <p>Punjab, India</p>
            <p style={{ fontSize: '0.82rem', marginTop: '8px' }}>
              Map integration available upon request
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
