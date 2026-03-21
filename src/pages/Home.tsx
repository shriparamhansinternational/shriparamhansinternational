import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import '../styles/Clients.css';
import '../styles/Products.css';
import logoImg from '../assets/SPI FINAL LOGO copy.png';
import ProductCard from '../components/ProductCard';
import { mainProducts, processProducts } from '../data/products';

// ===== HOME PAGE =====
const Home = () => {
  // Show only first 4 main products as a preview on home
  const featuredProducts = mainProducts.slice(0, 4);

  return (
    <main>
      {/* ── HERO SECTION ── */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-grid" />

        <div className="hero-content">
          {/* Left: Text */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="dot" />
              <span>Industrial Printing & Manufacturing</span>
            </div>

            <h1 className="hero-title">
              <span className="highlight">Industrial Printing</span>
              <br />&amp; Manufacturing Excellence
            </h1>
            <p className="hero-company">SPI — Core of Professionals</p>

            <p className="hero-tagline">
              Delivering <strong>premium stickers, metal labels, aluminium printing,
              tin printing, brass name plates,</strong> and industrial branding solutions
              with precision and commitment.
            </p>

            <div className="hero-cta">
              <Link to="/services" className="btn-primary">
                Explore Manufacturing →
              </Link>
              <Link to="/portfolio" className="btn-outline">
                View Portfolio
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Product Types</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Major Clients</span>
              </div>
            </div>
          </div>

          {/* Right: Logo Showcase */}
          <div className="hero-right">
            <div className="hero-logo-showcase">
              <div className="hero-logo-ring" />
              <div className="hero-logo-ring" />
              <div className="hero-logo-ring" />
              <img src={logoImg} alt="SPI Logo" className="hero-logo-img" />
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── EXPERTISE INTRO STRIP ── */}
      <div className="expertise-intro">
        <div className="expertise-intro-inner">
          <div className="expertise-intro-text">
            <h3>Manufacturer of Industrial Printing Products</h3>
            <p>Trusted by Sonalika Tractors, Vardhman Steel, Boparai &amp; KS Agrotech</p>
          </div>
          <div className="expertise-chips">
            {['Stickers', 'Metal Labels', 'Aluminium Printing', 'Tin Printing', 'Brass Name Plates', 'Flexible Pouches', 'Bottle Caps'].map(c => (
              <span key={c} className="expertise-chip">✓ {c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT SNIPPET ── */}
      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }} className="home-about-grid">
            <div>
              <span className="section-tag">Who We Are</span>
              <div className="gold-line" />
              <h2 className="section-title">
                A Manufacturer You Can Trust
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '20px' }}>
                Shri Paramhans International (SPI) is a professional manufacturer of
                stickers, metal labels, aluminium printing, tin printing, brass name plates,
                and packaging solutions based in Punjab, India.
              </p>
              <p className="section-subtitle" style={{ marginBottom: '36px' }}>
                We provide complete design-to-print solutions for industrial clients,
                with a strong focus on quality, precision, and timely delivery. Our
                products serve some of India's most reputed manufacturing enterprises.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About SPI →
              </Link>
            </div>

            {/* Values Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="home-values-grid">
              {[
                { icon: '🏆', title: 'Quality First', desc: 'Uncompromising standards in every product we manufacture' },
                { icon: '🖨️', title: 'Precision Printing', desc: 'Accurate, detail-oriented print execution every time' },
                { icon: '⚙️', title: 'Custom Solutions', desc: 'Tailored manufacturing for your exact requirements' },
                { icon: '🚀', title: 'Timely Delivery', desc: 'On-schedule production and delivery, always' },
              ].map(v => (
                <div key={v.title} style={{
                  padding: '28px 24px',
                  background: '#f8f9fc',
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{v.icon}</div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#0a1628', marginBottom: '6px' }}>{v.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS PREVIEW ── */}
      <section className="manufacturing-section alt-bg">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Our Manufacturing</span>
            <div className="gold-line" />
            <h2 className="section-title">Our Manufacturing Expertise</h2>
            <p className="section-subtitle">
              Shri Paramhans International specializes in manufacturing high-quality
              industrial printing products, metal labels, stickers, aluminium printing,
              tin printing, and customized branding solutions.
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn-primary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRINTING PROCESS PREVIEW ── */}
      <section className="process-support-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">How We Work</span>
            <div className="gold-line" />
            <h2 className="section-title">Printing Process &amp; Support</h2>
            <p className="section-subtitle">
              End-to-end printing support from design to final product delivery.
            </p>
          </div>

          <div className="process-cards-grid">
            {processProducts.map(p => (
              <div key={p.id} className="process-support-card">
                <div className="process-support-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS SECTION ── */}
      <section className="clients-section">
        <div className="container">
          <div className="clients-header">
            <span className="section-tag">Our Clients</span>
            <div className="gold-line" />
            <h2 className="section-title">Trusted by Reputed Industrial Brands</h2>
            <p className="section-subtitle">
              We manufacture and supply industrial printing products to some of India's
              most respected enterprises.
            </p>
          </div>

          <div className="clients-grid">
            {[
              { icon: '🚜', name: 'Sonalika Tractors', desc: 'Metal labels, stickers & industrial printing solutions' },
              { icon: '⚙️', name: 'Vardhman Special Steel', desc: 'Premium metal labels & branding solutions' },
              { icon: '🏗️', name: 'Boparai', desc: 'Custom printing & name plate manufacturing' },
              { icon: '🌾', name: 'KS Agrotech Pvt. Ltd.', desc: 'Stickers, labels & packaging printing solutions' },
            ].map(c => (
              <div key={c.name} className="client-card">
                <div className="client-icon">{c.icon}</div>
                <div className="client-name">{c.name}</div>
                <div className="client-desc">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="trust-banner">
            <div className="trust-text">
              <h3>Ready to Partner with SPI?</h3>
              <p>Let's discuss your industrial printing and manufacturing requirements.</p>
            </div>
            <div className="trust-badges">
              <div className="trust-badge"><span className="badge-icon">✅</span> Quality Assured</div>
              <div className="trust-badge"><span className="badge-icon">🏆</span> 10+ Years</div>
              <div className="trust-badge"><span className="badge-icon">🤝</span> Trusted Partner</div>
            </div>
            <Link to="/contact" className="btn-primary">Get In Touch →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%)',
        padding: '100px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag">Let's Work Together</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '20px' }}>
            Ready to Elevate Your Industrial Branding?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.8 }}>
            Connect with SPI today for premium stickers, metal labels, aluminium printing,
            tin printing, and all your industrial printing needs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Start a Conversation →</Link>
            <Link to="/portfolio" className="btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
