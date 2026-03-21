import '../styles/Portfolio.css';

// ===== PORTFOLIO PAGE =====
const portfolioItems = [
  {
    icon: '🚜',
    name: 'Sonalika Tractors',
    type: 'Industrial Supply & Procurement',
    desc: 'Sonalika Tractors, one of India\'s leading tractor manufacturers, engaged SPI for a long-term industrial supply partnership. SPI was responsible for sourcing and supplying critical industrial components and materials required in the manufacturing process, ensuring consistent quality and uninterrupted supply chain operations.',
    outcomes: [
      'Consistent on-time delivery of industrial materials across production cycles',
      'Streamlined procurement process reducing lead times significantly',
      'Quality-certified supply chain ensuring zero production downtime',
      'Long-term partnership built on trust and professional reliability',
    ],
    tags: ['Industrial Supply', 'Procurement', 'Manufacturing Support'],
  },
  {
    icon: '⚙️',
    name: 'Vardhman Special Steel Pvt. Ltd.',
    type: 'Material Supply & Quality Solutions',
    desc: 'Vardhman Special Steel, a premium steel manufacturing enterprise, partnered with SPI for specialized material supply and quality assurance support. SPI provided tailored procurement solutions that aligned with Vardhman\'s stringent quality requirements and large-scale production demands.',
    outcomes: [
      'Reliable supply of quality-certified industrial materials',
      'Custom procurement strategy aligned with production schedules',
      'Consistent quality standards maintained across all supply batches',
      'Strengthened supply chain resilience for large-scale steel operations',
    ],
    tags: ['Material Supply', 'Quality Assurance', 'Steel Industry'],
  },
  {
    icon: '🏗️',
    name: 'Boparai',
    type: 'Manufacturing Support & Custom Solutions',
    desc: 'SPI partnered with Boparai to provide comprehensive manufacturing support and custom industrial solutions. The engagement focused on optimizing operational workflows, sourcing specialized industrial products, and delivering tailored solutions that addressed the company\'s unique operational challenges.',
    outcomes: [
      'Customized industrial solutions designed for specific operational needs',
      'Improved operational efficiency through targeted support services',
      'Reliable supply of specialized industrial products and components',
      'Ongoing partnership with dedicated account management',
    ],
    tags: ['Manufacturing Support', 'Custom Solutions', 'Operations'],
  },
  {
    icon: '🌾',
    name: 'KS Agrotech Pvt. Ltd.',
    type: 'Corporate Procurement & Supply Chain',
    desc: 'KS Agrotech Pvt. Ltd., a prominent agro-industrial company, engaged SPI for corporate procurement support and supply chain management. SPI delivered end-to-end procurement solutions that ensured cost-effective sourcing of industrial materials while maintaining the quality standards required for agro-industrial operations.',
    outcomes: [
      'End-to-end procurement management for agro-industrial operations',
      'Cost-effective sourcing without compromising on quality standards',
      'Optimized supply chain ensuring timely availability of materials',
      'Professional partnership delivering consistent operational value',
    ],
    tags: ['Procurement', 'Supply Chain', 'Agro-Industrial'],
  },
];

const Portfolio = () => {
  return (
    <main className="portfolio-page">
      {/* ── PAGE HERO ── */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <span className="section-tag">Our Portfolio</span>
          <h1>Partnerships That Define Excellence</h1>
          <p>
            A showcase of our work with India's most reputed industrial and
            agro-manufacturing enterprises — built on trust, quality, and
            long-term commitment.
          </p>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="portfolio-stats">
        <div className="container">
          <div className="portfolio-stats-grid">
            <div className="pstat-item">
              <div className="pstat-number">4+</div>
              <div className="pstat-label">Major Clients</div>
            </div>
            <div className="pstat-item">
              <div className="pstat-number">50+</div>
              <div className="pstat-label">Projects Delivered</div>
            </div>
            <div className="pstat-item">
              <div className="pstat-number">10+</div>
              <div className="pstat-label">Years of Excellence</div>
            </div>
            <div className="pstat-item">
              <div className="pstat-number">100%</div>
              <div className="pstat-label">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="portfolio-main">
        <div className="container">
          <div style={{ marginBottom: '16px' }}>
            <span className="section-tag">Client Work</span>
            <div className="gold-line" />
            <h2 className="section-title">Our Key Partnerships</h2>
            <p className="section-subtitle">
              Each partnership represents our commitment to delivering industrial
              excellence and creating lasting value for our clients.
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div key={item.name} className="portfolio-card">
                {/* Card Header */}
                <div className="portfolio-card-header">
                  <div className="client-logo-placeholder">{item.icon}</div>
                  <h3>{item.name}</h3>
                  <span className="portfolio-type-badge">{item.type}</span>
                </div>

                {/* Card Body */}
                <div className="portfolio-card-body">
                  <p>{item.desc}</p>

                  <div className="portfolio-outcomes">
                    <p style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#c9a84c',
                      marginBottom: '12px',
                    }}>
                      Key Outcomes
                    </p>
                    {item.outcomes.map(o => (
                      <div key={o} className="outcome-item">
                        <span className="outcome-dot" />
                        <span>{o}</span>
                      </div>
                    ))}
                  </div>

                  <div className="portfolio-tags">
                    {item.tags.map(t => (
                      <span key={t} className="portfolio-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: '#fff',
        padding: '80px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div className="container">
          <span className="section-tag">Work With Us</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            color: '#0a1628',
            margin: '16px 0 20px',
          }}>
            Become Our Next Success Story
          </h2>
          <p style={{
            color: '#64748b',
            maxWidth: '500px',
            margin: '0 auto 36px',
            lineHeight: 1.8,
          }}>
            Join the growing list of reputed enterprises that trust SPI for
            their industrial supply and procurement needs.
          </p>
          <a href="/contact" className="btn-primary">Start a Partnership →</a>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
