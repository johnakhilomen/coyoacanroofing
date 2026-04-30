import Container from './Container';

export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #1E2E44 0%, #2F4764 100%)', width: '100%' }}>
      <Container style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="hero-grid">
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{
              display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center',
              padding: '7px 14px', borderRadius: 999,
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)',
            }}>
              <span style={{ color: '#E6EDF4', fontSize: 11, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                Brooklyn Park, Minnesota
              </span>
            </div>

            <h1 className="hero-h1" style={{ color: '#F2F6FA', fontWeight: 700, fontFamily: 'Geist, sans-serif', margin: 0 }}>
              Roof Repairs &amp; Replacements<br />Built for Minnesota Weather
            </h1>

            <p style={{ color: '#D5DFE9', fontSize: 18, lineHeight: 1.5, margin: 0 }}>
              Coyocala Roofing protects homes and businesses with expert roofing, storm restoration,
              and insurance claim support across the Twin Cities.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                background: '#D66A2E', color: '#FFF7F1', fontWeight: 700, fontSize: 15,
                padding: '12px 24px', borderRadius: 10, textDecoration: 'none',
              }}>
                Get Free Roof Inspection
              </a>
              <a href="#gallery" style={{
                border: '2px solid #B6C5D6', color: '#E2EAF2', fontWeight: 600, fontSize: 15,
                padding: '12px 24px', borderRadius: 10, textDecoration: 'none',
              }}>
                View Recent Projects
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1763665814657-919dac53ea26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
              alt="Roofing work"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(11,18,32,0.5) 0%, rgba(11,18,32,0.1) 100%)',
            }} />
            <div style={{
              position: 'absolute', bottom: 20, left: 16, right: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'space-around',
              padding: '0 16px', height: 76, borderRadius: 16,
              background: 'rgba(255,255,255,0.93)', border: '1px solid rgba(255,255,255,0.6)',
            }}>
              {['Licensed & Insured', '5★ Local Reviews', 'Storm Damage Experts'].map((badge) => (
                <span key={badge} style={{ color: '#2C415A', fontSize: 13, fontWeight: 700, textAlign: 'center' }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
