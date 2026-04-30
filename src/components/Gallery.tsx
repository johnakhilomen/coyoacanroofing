import Container from './Container';

const images = [
  { src: '/img1.png', alt: 'Roofing project 1' },
  { src: '/img2.png', alt: 'Roofing project 2' },
  { src: '/img3.png', alt: 'Roofing project 3' },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: '#F8FAFC', width: '100%' }}>
      <Container style={{ paddingTop: 64, paddingBottom: 64, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center' }}>
          <span style={{ color: '#C2410C', fontWeight: 700, fontSize: 12, letterSpacing: '1.1px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>
            RECENT PROJECTS
          </span>
          <h2 className="section-h2-lg" style={{ color: '#0F172A', fontWeight: 700, fontSize: 38, fontFamily: 'Montserrat, sans-serif', margin: 0 }}>
            Roofing Work Across Brooklyn Park
          </h2>
          <p className="section-p" style={{ color: '#475569', fontSize: 17, lineHeight: 1.5, maxWidth: 560, margin: 0 }}>
            Real homes. Real weather. Real results from our local crews.
          </p>
        </div>

        <div className="grid-3" style={{ height: 'auto' }}>
          {images.map((img) => (
            <div key={img.src} style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #CBD5E1', aspectRatio: '4/3' }}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
