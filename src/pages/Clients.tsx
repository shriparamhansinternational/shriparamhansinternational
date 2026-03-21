import { Link } from 'react-router-dom';
import '../styles/Clients.css';

// ===== CLIENTS PAGE =====
const clients = [
  {
    icon: '🚜',
    name: 'Sonalika Tractors',
    desc: 'One of India\'s largest tractor manufacturers — Industrial supply & procurement partnership',
    industry: 'Tractor Manufacturing',
  },
  {
    icon: '⚙️',
    name: 'Vardhman Special Steel Pvt. Ltd.',
    desc: 'Premium steel manufacturing enterprise — Material supply & quality solutions',
    industry: 'Steel Manufacturing',
  },
  {
    icon: '🏗️',
    name: 'Boparai',
    desc: 'Established industrial enterprise — Manufacturing support & custom solutions',
    industry: 'Industrial Operations',
  },
  {
    icon: '🌾',
    name: 'KS Agrotech Pvt. Ltd.',
    desc: 'Leading agro-industrial company — Corporate procurement & supply chain support',
    industry: 'Agro-Industrial',
  },
];

const Clients = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      {/* ── PAGE HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #112240 100%)',
        padding: '100px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span className="section-tag">Our Clients</span>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: '#fff',
            margin: '16px 0 20px',
          }}>
            Trusted by India's Industrial Leaders
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
            Our client portfolio represents some of the most respected names in
            Indian manufacturing and agro-industrial sectors.
          </p>
        </div>
      </section>

      {/* ── CLIENTS SECTION ── */}
      <section className="clients-section">
        <div className="container">
          <div className="clients-header">
            <span className="section-tag">Trusted Partners</span>
            <div className="gold-line" />
            <h2 className="section-title">Our Valued Clients</h2>
            <p className="section-subtitle">
              Each client relationship is built on a foundation of trust, quality,
              and a shared commitment to industrial excellence.
            </p>
          </div>

          <div className="clients-grid">
            {clients.map(c => (
              <div key={c.name} className="client-card">
                <div className="client-icon">{c.icon}</div>
                <div className="client-name">{c.name}</div>
                <div className="client-desc">{c.desc}</div>
              </div>
            ))}
          </div>

          {/* Trust Banner */}
          <div className="trust-banner">
            <div className="trust-text">
              <h3>Join Our Growing Client Network</h3>
              <p>Partner with SPI and experience the difference of working with a truly committed industrial solutions provider.</p>
            </div>
            <div className="trust-badges">
              <div className="trust-badge"><span className="badge-icon">✅</span> Quality Assured</div>
              <div className="trust-badge"><span className="badge-icon">🏆</span> Proven Excellence</div>
              <div className="trust-badge"><span className="badge-icon">🤝</span> Long-term Focus</div>
            </div>
            <Link to="/contact" className="btn-primary">Partner With Us →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL STYLE SECTION ── */}
      <section style={{ background: '#f8f9fc', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">Client Industries</span>
            <div className="gold-line" style={{ margin: '0 auto 24px' }} />
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              SPI's expertise spans across multiple industrial sectors, delivering
              specialized solutions for each unique domain.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }} className="industry-grid-inline">
            {[
              { icon: '🚜', title: 'Tractor & Farm Equipment', desc: 'Supply chain and procurement support for tractor manufacturing operations.' },
              { icon: '⚙️', title: 'Steel & Metals', desc: 'Material supply and quality solutions for steel manufacturing enterprises.' },
              { icon: '🏗️', title: 'Industrial Manufacturing', desc: 'Comprehensive support for large-scale industrial manufacturing operations.' },
              { icon: '🌾', title: 'Agro-Industrial', desc: 'Specialized procurement and supply solutions for agro-industrial companies.' },
            ].map(ind => (
              <div key={ind.title} style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '36px 28px',
                border: '1px solid rgba(0,0,0,0.07)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(10,22,40,0.1)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#c9a84c';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,0,0,0.07)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{ind.icon}</div>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1rem',
                  color: '#0a1628',
                  marginBottom: '10px',
                }}>{ind.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
