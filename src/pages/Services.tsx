import '../styles/Services.css';
import '../styles/Products.css';
import ProductCard from '../components/ProductCard';
import { mainProducts, additionalProducts, processProducts } from '../data/products';

// ===== SERVICES PAGE =====
const services = [
  {
    icon: '🏷️',
    title: 'Sticker Manufacturing',
    desc: 'Custom sticker manufacturing for branding, packaging, barcodes, vinyl, transparent, and industrial label applications.',
    features: ['Product & Branding Stickers', 'Barcode & Vinyl Stickers', 'Transparent Stickers', 'Industrial Label Stickers'],
  },
  {
    icon: '🔩',
    title: 'Aluminium Printing',
    desc: 'Precision aluminium printing with durable finish for industrial and commercial applications requiring long-lasting quality.',
    features: ['Industrial aluminium labels', 'Durable surface printing', 'Custom size & shape', 'Weather-resistant finish'],
  },
  {
    icon: '🖨️',
    title: 'Tin Printing',
    desc: 'Reliable tin printing crafted for attractive presentation and long-lasting use across industrial and commercial sectors.',
    features: ['Tin plate printing', 'Tin container printing', 'Custom colour printing', 'High-resolution output'],
  },
  {
    icon: '🏅',
    title: 'Metal Label Manufacturing',
    desc: 'Premium metal labels for branding, industrial marking, and product identification with precision and durability.',
    features: ['Aluminium & brass labels', 'Embossed & engraved options', 'Industrial grade quality', 'Custom branding'],
  },
  {
    icon: '✨',
    title: 'Brass Name Plate Solutions',
    desc: 'Elegant brass name plates for offices, industries, and premium branding with a refined professional finish.',
    features: ['Office & industrial plates', 'Engraved & printed options', 'Diamond cut finishing', 'Anodised variants'],
  },
  {
    icon: '📦',
    title: 'Packaging Printing',
    desc: 'Complete packaging printing solutions including flexible pouches, bottle caps, and tin containers for commercial use.',
    features: ['Flexible pouch printing', 'Bottle cap printing', 'Tin container printing', 'Custom packaging design'],
  },
  {
    icon: '🖋️',
    title: 'Roto Gravure Printing',
    desc: 'Advanced roto gravure printing for high-quality, consistent, and large-volume print results.',
    features: ['High-volume printing', 'Consistent colour output', 'Fine detail reproduction', 'Industrial grade'],
  },
  {
    icon: '🎨',
    title: 'Designing & Plate Making',
    desc: 'End-to-end design support and plate making services to convert your ideas into print-ready production files.',
    features: ['Creative design support', 'CTP pre-press solutions', 'Film processing', 'Plate making'],
  },
  {
    icon: '💼',
    title: 'Promotional & Corporate Printing',
    desc: 'Branded promotional products including visiting cards, key chains, promotional pens, sign boards, and letter boards.',
    features: ['Visiting cards', 'Key chains & pens', 'Sign boards', 'Letter boards'],
  },
];

const processSteps = [
  { num: '01', title: 'Requirement Discussion', desc: 'We understand your product, quantity, material, and design requirements in detail.' },
  { num: '02', title: 'Design & Pre-Press', desc: 'Our design team creates print-ready artwork and prepares CTP plates for production.' },
  { num: '03', title: 'Manufacturing', desc: 'Precision manufacturing using quality materials with strict quality checks at every stage.' },
  { num: '04', title: 'Delivery', desc: 'Timely dispatch and delivery of finished products as per agreed schedule.' },
];

const Services = () => {
  return (
    <main className="services-page">
      {/* ── PAGE HERO ── */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="section-tag">Our Services</span>
          <h1>Industrial Printing &amp; Manufacturing Services</h1>
          <p>
            From sticker manufacturing to metal labels, aluminium printing, tin printing,
            brass name plates, and complete packaging solutions — SPI delivers it all.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="services-main">
        <div className="container">
          <div style={{ marginBottom: '16px' }}>
            <span className="section-tag">What We Offer</span>
            <div className="gold-line" />
            <h2 className="section-title">Our Service Portfolio</h2>
            <p className="section-subtitle">
              Comprehensive industrial printing and manufacturing services designed
              for quality, precision, and timely delivery.
            </p>
          </div>

          <div className="services-grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN MANUFACTURING PRODUCTS ── */}
      <section className="manufacturing-section alt-bg">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Our Manufacturing Expertise</span>
            <div className="gold-line" />
            <h2 className="section-title">Our Manufacturing Expertise</h2>
            <p className="section-subtitle">
              Shri Paramhans International specializes in manufacturing high-quality
              industrial printing products, metal labels, stickers, aluminium printing,
              tin printing, and customized branding solutions.
            </p>
          </div>

          <div className="products-grid">
            {mainProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL PRODUCTS ── */}
      <section className="manufacturing-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">More Products</span>
            <div className="gold-line" />
            <h2 className="section-title">Additional Products</h2>
            <p className="section-subtitle">
              A wide range of promotional, branding, and display products
              manufactured to the highest quality standards.
            </p>
          </div>

          <div className="products-grid three-col">
            {additionalProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINTING PROCESS & SUPPORT ── */}
      <section className="process-support-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Pre-Press &amp; Support</span>
            <div className="gold-line" />
            <h2 className="section-title">Printing Process &amp; Support</h2>
            <p className="section-subtitle">
              Complete pre-press and printing support services ensuring accuracy,
              consistency, and quality at every stage of production.
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

      {/* ── PRODUCTION PROCESS ── */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <span className="section-tag">How We Work</span>
            <div className="gold-line" />
            <h2 className="section-title">Our Production Process</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A structured, quality-driven process from requirement to delivery.
            </p>
          </div>

          <div className="process-steps">
            {processSteps.map(step => (
              <div key={step.num} className="process-step">
                <div className="step-number">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div className="container">
          <span className="section-tag">Get Started</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#fff', margin: '16px 0 20px' }}>
            Ready to Discuss Your Manufacturing Requirements?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Reach out to our team for stickers, metal labels, aluminium printing,
            tin printing, or any industrial printing requirement.
          </p>
          <a href="/contact" className="btn-primary">Request a Quote →</a>
        </div>
      </section>
    </main>
  );
};

export default Services;
