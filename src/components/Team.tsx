import Container from './Container';

const members = [
  {
    name: 'Gabriela Almaguer',
    role: 'Co-Founder & Lead Roofer',
    bio: 'With 18 years of roofing experience across the Twin Cities, Gabriela built Coyocala on a foundation of honest work and long-term relationships.',
    initials: 'GA',
    accent: '#1F3348',
  },
  {
    name: 'Estella Reyes',
    role: 'Co-Founder & Lead Roofer',
    bio: 'Estella guides homeowners through every step of the storm claim process, ensuring fast approvals and zero out-of-pocket surprises.',
    initials: 'ER',
    accent: '#D66A2E',
  },
];

export default function Team() {
  return (
    <section style={{ background: '#F6F5F1', borderTop: '1px solid #E5E1D6', width: '100%' }}>
      <Container style={{ paddingTop: 72, paddingBottom: 72, display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center' }}>
          <span style={{ color: '#B45309', fontWeight: 700, fontSize: 12, letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>
            OUR TEAM
          </span>
          <h2 className="section-h2-lg" style={{ color: '#1E293B', fontWeight: 700, fontSize: 38, fontFamily: 'Montserrat, sans-serif', margin: 0 }}>
            The People Behind the Work
          </h2>
          <p className="section-p" style={{ color: '#475569', fontSize: 17, lineHeight: 1.55, maxWidth: 520, margin: 0 }}>
            Local experts who show up on time, communicate clearly, and take pride in every roof they touch.
          </p>
        </div>

        <div className="grid-2">
          {members.map((m) => (
            <div key={m.name} style={{
              background: '#fff', borderRadius: 18, border: '1px solid #E2DDD4',
              padding: 32, display: 'flex', gap: 24, alignItems: 'flex-start',
            }}>
              <div style={{
                flexShrink: 0, width: 72, height: 72, borderRadius: '50%',
                background: m.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 22, fontFamily: 'Montserrat, sans-serif' }}>
                  {m.initials}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ color: '#0F172A', fontWeight: 700, fontSize: 20, fontFamily: 'Montserrat, sans-serif' }}>
                  {m.name}
                </span>
                <span style={{ color: '#D66A2E', fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  {m.role}
                </span>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.6, margin: '6px 0 0' }}>
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
