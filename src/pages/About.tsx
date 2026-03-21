import { Link } from 'react-router-dom';
import '../styles/About.css';
import logoImg from '../assets/SPI FINAL LOGO copy.png';

// ===== ABOUT PAGE =====
const About = () => {
  return (
    <main className="about-page">
      {/* ── PAGE HERO ── */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="section-tag">About SPI</span>
          <h1>Industrial Printing Manufacturer You Can Trust</h1>
          <p>
            Shri Paramhans International is a manufacturer of stickers, metal labels,
            aluminium printing, tin printing, and industrial branding solutions —
            built on quality, integrity, and precision.
          </p>
        </div>
      </section>

      {/* ── COMPANY INTRO ── */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            {/* Visual */}
            <div className="about-intro-visual">
              <div className="about-img-card">
                <img src={logoImg} alt="SPI Logo" />
                <p className="card-tagline">"Core of Professionals"</p>
              </div>
              <div className="about-badge-row">
                <span className="about-badge">🏆 10+ Years</span>
                <span className="about-badge">✅ Quality Assured</span>
                <span className="about-badge">🤝 Trusted Partner</span>
              </div>
            </div>

            {/* Text */}
            <div className="about-intro-text">
              <span className="section-tag">Our Story</span>
              <div className="gold-line" />
              <h2 className="section-title">
                Shri Paramhans International (SPI)
              </h2>
              <p>
                Shri Paramhans International (SPI) is a professionally managed manufacturer
                of stickers, metal labels, aluminium printing, tin printing, brass name plates,
                flexible pouches, bottle caps, and industrial packaging solutions, headquartered
                in Punjab, India.
              </p>
              <p>
                We provide complete design-to-print solutions for industrial clients — from
                creative design and CTP pre-press to final manufacturing and delivery. Our
                products serve some of India's most reputed enterprises including Sonalika
                Tractors, Vardhman Special Steel Pvt. Ltd., Boparai, and KS Agrotech Pvt. Ltd.
              </p>
              <p>
                At SPI, our focus on quality, precision, and timely delivery has made us a
                trusted manufacturing partner for large-scale industrial and agro-manufacturing
                companies across North India.
              </p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '8px' }}>
                Connect With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="mv-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">Our Direction</span>
            <div className="gold-line" style={{ margin: '0 auto 24px' }} />
            <h2 className="section-title">Mission & Vision</h2>
          </div>

          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To manufacture and deliver high-quality industrial printing products —
                including stickers, metal labels, aluminium printing, tin printing, and
                packaging solutions — that meet the precise requirements of large-scale
                industrial enterprises.
              </p>
              <p style={{ marginTop: '16px' }}>
                We achieve this through rigorous quality control, advanced manufacturing
                processes, and a dedicated team committed to delivering every order with
                precision and on time.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be recognized as the most trusted industrial printing manufacturer in
                North India — known for our product quality, manufacturing precision, and
                ability to deliver customized printing solutions that create lasting value
                for our clients.
              </p>
              <p style={{ marginTop: '16px' }}>
                We envision SPI as a company synonymous with industrial printing excellence,
                setting the benchmark for quality, reliability, and innovation in sticker
                manufacturing, metal labels, and industrial branding solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <span className="section-tag">What We Stand For</span>
            <div className="gold-line" />
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide every decision we make and every partnership we build.
            </p>
          </div>

          <div className="values-grid">
            {[
              { icon: '🏆', title: 'Quality', desc: 'We never compromise on quality. Every product, service, and interaction reflects our commitment to the highest standards.' },
              { icon: '🤝', title: 'Commitment', desc: 'We honor our commitments. When we make a promise to a client, we deliver — on time, every time.' },
              { icon: '⚙️', title: 'Precision', desc: 'Attention to detail is at the core of everything we do. Precision in execution ensures consistent, reliable outcomes.' },
              { icon: '🛡️', title: 'Trust', desc: 'Trust is earned through consistent action. We build relationships based on transparency, honesty, and integrity.' },
              { icon: '⏱️', title: 'Timely Delivery', desc: 'We understand that time is critical in industrial operations. Our processes are designed to ensure on-schedule delivery.' },
              { icon: '💼', title: 'Professionalism', desc: 'From the first interaction to project completion, we maintain the highest standards of professional conduct.' },
            ].map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE SPI ── */}
      <section className="why-section">
        <div className="container">
          <span className="section-tag">Why SPI</span>
          <div className="gold-line" />
          <h2 className="section-title">Why Choose Shri Paramhans International?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.8, marginBottom: '8px' }}>
            In a competitive industrial landscape, SPI stands apart through a combination
            of experience, integrity, and a genuine commitment to client success.
          </p>

          <div className="why-grid">
            {[
              { title: 'Proven Track Record', desc: 'Over a decade of successful partnerships with India\'s leading industrial enterprises.' },
              { title: 'Industry Expertise', desc: 'Deep knowledge of industrial supply chains, procurement processes, and manufacturing requirements.' },
              { title: 'Client-Centric Approach', desc: 'Every solution is tailored to the specific needs and goals of the client — no one-size-fits-all.' },
              { title: 'Quality Assurance', desc: 'Rigorous quality checks at every stage ensure that only the best reaches our clients.' },
              { title: 'Transparent Communication', desc: 'We keep our clients informed at every step, ensuring complete visibility and confidence.' },
              { title: 'Long-Term Partnerships', desc: 'We don\'t just complete projects — we build relationships that grow stronger over time.' },
              { title: 'Competitive Pricing', desc: 'Premium quality at fair, transparent pricing — delivering maximum value for every investment.' },
              { title: 'Dedicated Support', desc: 'Our team is always available to address concerns, provide updates, and ensure client satisfaction.' },
            ].map(w => (
              <div key={w.title} className="why-item">
                <div className="why-check">✓</div>
                <div className="why-item-text">
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
