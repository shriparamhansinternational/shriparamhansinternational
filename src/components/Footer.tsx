import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logoImg from '../assets/SPI FINAL LOGO copy.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImg} alt="SPI Logo" />
              <div className="footer-logo-text">
                <div className="logo-name">SPI</div>
                <div className="logo-sub">Shri Paramhans International</div>
              </div>
            </div>
            <p className="footer-desc">
              Manufacturer of stickers, metal labels, aluminium printing, tin printing,
              brass name plates, flexible pouches, bottle caps, and industrial printing
              solutions. Trusted by India's leading enterprises.
            </p>
            <p className="footer-tagline">"Core of Professionals"</p>
            {/* Social Icons */}
            <div className="footer-social">
              <a href="#" className="social-btn" aria-label="LinkedIn">💼</a>
              <a href="#" className="social-btn" aria-label="Twitter">🐦</a>
              <a href="#" className="social-btn" aria-label="Facebook">📘</a>
              <a href="#" className="social-btn" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/clients">Our Clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="/services">Stickers</a></li>
              <li><a href="/services">Aluminium Printing</a></li>
              <li><a href="/services">Tin Printing</a></li>
              <li><a href="/services">Metal Labels</a></li>
              <li><a href="/services">Brass Name Plates</a></li>
              <li><a href="/services">Flexible Pouches</a></li>
              <li><a href="/services">Bottle Caps</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="fc-icon">👤</span>
                <span>Balwinder Singh</span>
              </div>
              <div className="footer-contact-item">
                <span className="fc-icon">📞</span>
                <a href="tel:+919872273080">+91 98722 73080</a>
              </div>
              <div className="footer-contact-item">
                <span className="fc-icon">✉️</span>
                <a href="mailto:shriparamhansinternational@gmail.com">
                  shriparamhansinternational@gmail.com
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="fc-icon">📍</span>
                <span>Punjab, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            <a
              href="https://svermaportfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#c9a84c', fontWeight: 600, textDecoration: 'none' }}
            >
              © 2026 Sv_desizns. All rights reserved. Designed By Sourav Verma
            </a>
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
