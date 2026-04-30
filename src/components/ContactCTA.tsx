import Container from './Container';

export default function ContactCTA() {
	return (
		<>
			{/* Orange CTA */}
			<section
				id="contact"
				style={{ background: '#D66A2E', width: '100%' }}
			>
				<Container
					style={{
						paddingTop: 64,
						paddingBottom: 64,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 20,
						textAlign: 'center',
					}}
				>
					<h2
						style={{
							color: '#FFF8F2',
							fontWeight: 700,
							fontSize: 46,
							lineHeight: 1.1,
							maxWidth: 620,
							fontFamily: 'Geist, sans-serif',
							margin: 0,
						}}
					>
						Need a Roof Inspection This Week?
					</h2>
					<p
						style={{
							color: '#FFEAD9',
							fontSize: 19,
							lineHeight: 1.5,
							maxWidth: 540,
							margin: 0,
						}}
					>
						Call Coyocala Roofing at 763-555-0198 or request a free estimate
						online.
					</p>
					<a
						href="tel:7635550198"
						style={{
							background: '#1F3348',
							color: '#ECF3FA',
							fontWeight: 700,
							fontSize: 15,
							padding: '14px 28px',
							borderRadius: 10,
							textDecoration: 'none',
						}}
					>
						Request Free Estimate
					</a>
				</Container>
			</section>

			{/* Bottom CTA */}
			<section style={{ background: '#FFF7ED', width: '100%' }}>
				<Container
					style={{
						paddingTop: 64,
						paddingBottom: 64,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 48,
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 16,
							maxWidth: 520,
						}}
					>
						<h2
							style={{
								color: '#0F172A',
								fontWeight: 700,
								fontSize: 38,
								fontFamily: 'Montserrat, sans-serif',
								margin: 0,
							}}
						>
							Ready for a safer, stronger roof?
						</h2>
						<p
							style={{
								color: '#334155',
								fontSize: 17,
								lineHeight: 1.6,
								margin: 0,
							}}
						>
							Book your free roof inspection today and get a detailed estimate
							within 24 hours.
						</p>
					</div>
					<div
						style={{
							flexShrink: 0,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-end',
							gap: 12,
						}}
					>
						<a
							href="tel:7635550198"
							style={{
								background: '#C2410C',
								color: '#fff',
								fontWeight: 700,
								fontSize: 15,
								padding: '14px 28px',
								borderRadius: 12,
								textDecoration: 'none',
							}}
						>
							Schedule Free Inspection
						</a>
						<p
							style={{
								color: '#0F172A',
								fontSize: 17,
								fontWeight: 600,
								margin: 0,
							}}
						>
							Call us: 763-555-0198
						</p>
						<p style={{ color: '#475569', fontSize: 15, margin: 0 }}>
							Serving Brooklyn Park, MN
						</p>
					</div>
				</Container>
			</section>
		</>
	);
}
