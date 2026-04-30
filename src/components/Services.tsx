import Container from './Container';

const simpleCards = [
  { title: 'Roof Replacement', desc: 'Asphalt, architectural shingles, and full tear-off replacements with workmanship warranty.' },
  { title: 'Storm Damage Repair', desc: 'Fast leak response, emergency tarping, hail/wind repairs, and insurance claim documentation.' },
  { title: 'Commercial Roofing', desc: 'Repairs and replacement plans for flat and low-slope systems with minimal business disruption.' },
];

const detailedCards = [
  { num: '01', title: 'Roof Replacement', desc: 'Architectural shingles and modern systems installed for harsh freeze-thaw cycles.', bg: '#FFFFFF' },
  { num: '02', title: 'Storm Damage Repair', desc: 'Fast tarping, leak mitigation, and full documentation to support insurance claims.', bg: '#FDF2E8' },
  { num: '03', title: 'Roof Inspections', desc: 'Detailed reports with photos and priority recommendations for long-term roof health.', bg: '#FFFFFF' },
];

export default function Services() {
  return (
    <>
      {/* Quick Services */}
      <section id="services" style={{ background: '#F6F5F1', width: '100%' }}>
        <Container style={{ paddingTop: 52, paddingBottom: 52, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <h2 className="section-h2-lg" style={{ color: '#1E354E', fontWeight: 700, fontSize: 40, fontFamily: 'Geist, sans-serif', margin: 0 }}>
            Roofing Services
          </h2>
          <div className="grid-3">
            {simpleCards.map((card) => (
              <div key={card.title} style={{
                background: '#fff', borderRadius: 14, border: '1px solid #D8D2C4',
                padding: 24, display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <h3 style={{ color: '#274661', fontWeight: 700, fontSize: 20, fontFamily: 'Geist, sans-serif', margin: 0 }}>{card.title}</h3>
                <p style={{ color: '#526171', fontSize: 15, lineHeight: 1.5, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Services */}
      <section style={{ background: '#F6F5F1', borderTop: '1px solid #E5E1D6', width: '100%' }}>
        <Container style={{ paddingTop: 72, paddingBottom: 72, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
            <span style={{ color: '#B45309', fontWeight: 700, fontSize: 12, letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>
              OUR ROOFING SERVICES
            </span>
            <h2 className="section-h2-lg" style={{ color: '#1E293B', fontWeight: 700, fontSize: 38, fontFamily: 'Montserrat, sans-serif', margin: 0 }}>
              Complete Roofing Solutions for Homes &amp; Businesses
            </h2>
            <p className="section-p" style={{ color: '#334155', fontSize: 17, lineHeight: 1.55, maxWidth: 640, margin: 0 }}>
              From emergency leaks to full roof replacements, Coyocala Roofing delivers durable craftsmanship
              and transparent pricing across Brooklyn Park and nearby communities.
            </p>
          </div>
          <div className="grid-3">
            {detailedCards.map((card) => (
              <div key={card.num} style={{
                background: card.bg, borderRadius: 18, border: '2px solid #0F172A',
                padding: 28, display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <span style={{ color: '#B45309', fontWeight: 700, fontSize: 12, fontFamily: 'Montserrat, sans-serif' }}>{card.num}</span>
                <h3 style={{ color: '#0F172A', fontWeight: 700, fontSize: 24, fontFamily: 'Montserrat, sans-serif', margin: 0 }}>{card.title}</h3>
                <p style={{ color: '#334155', fontSize: 16, lineHeight: 1.55, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
