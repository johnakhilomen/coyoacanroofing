import Container from './Container';

const stats = [
	{ label: 'Avg response time', value: '< 24 hours' },
	{ label: 'Projects completed', value: '1,200+' },
	{ label: 'Customer rating', value: '4.9 / 5' },
];

export default function Trust() {
	return (
		<>
			{/* Trust strip */}
			<section style={{ background: '#EFECE3', width: '100%' }}>
				<Container
					style={{
						paddingTop: 32,
						paddingBottom: 32,
						display: 'grid',
						gridTemplateColumns: '1fr 360px',
						gap: 20,
					}}
				>
					<div
						style={{
							background: '#fff',
							borderRadius: 14,
							border: '1px solid #D8D2C4',
							padding: 28,
							display: 'flex',
							flexDirection: 'column',
							gap: 12,
						}}
					>
						<h3
							style={{
								color: '#223E58',
								fontWeight: 700,
								fontSize: 22,
								fontFamily: 'Geist, sans-serif',
								margin: 0,
							}}
						>
							Why Homeowners Choose Coyocala
						</h3>
						<p
							style={{
								color: '#4A5D6F',
								fontSize: 16,
								lineHeight: 1.55,
								margin: 0,
							}}
						>
							• Local crews serving Minnesota and nearby cities
							<br />
							• Transparent estimates and daily project updates
							<br />• 10-year workmanship warranty
						</p>
					</div>
					<div
						style={{
							background: '#1F3348',
							borderRadius: 14,
							padding: 28,
							display: 'flex',
							flexDirection: 'column',
							gap: 14,
						}}
					>
						<p
							style={{
								color: '#EDF3F8',
								fontSize: 19,
								lineHeight: 1.35,
								fontFamily: 'Geist, sans-serif',
								margin: 0,
							}}
						>
							"Coyocala made the entire insurance process easy and finished our
							roof in one day."
						</p>
						<p
							style={{
								color: '#C7D7E6',
								fontSize: 14,
								fontWeight: 700,
								margin: 0,
							}}
						>
							— Sarah M., Brooklyn Park
						</p>
					</div>
				</Container>
			</section>

			{/* Proof Section */}
			<section
				id="reviews"
				style={{ background: '#0F172A', width: '100%' }}
			>
				<Container
					style={{
						paddingTop: 64,
						paddingBottom: 64,
						display: 'grid',
						gridTemplateColumns: '1fr 380px',
						gap: 48,
						alignItems: 'center',
					}}
				>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
						<span
							style={{
								color: '#F59E0B',
								fontWeight: 700,
								fontSize: 12,
								letterSpacing: '1.2px',
								textTransform: 'uppercase',
								fontFamily: 'Montserrat, sans-serif',
							}}
						>
							WHY HOMEOWNERS CHOOSE US
						</span>
						<h2
							style={{
								color: '#F8FAFC',
								fontWeight: 700,
								fontSize: 38,
								lineHeight: 1.1,
								fontFamily: 'Montserrat, sans-serif',
								margin: 0,
							}}
						>
							Trusted Roofing Partner in Brooklyn Park
						</h2>
						<p
							style={{
								color: '#CBD5E1',
								fontSize: 17,
								lineHeight: 1.6,
								margin: 0,
							}}
						>
							Local crews, responsive scheduling, and workmanship warranties
							backed by clear communication from first inspection to final
							cleanup.
						</p>
						<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
							{['Licensed • Insured', 'Financing Options'].map((b) => (
								<span
									key={b}
									style={{
										background: '#1E293B',
										color: '#F8FAFC',
										fontSize: 14,
										fontWeight: 600,
										padding: '10px 16px',
										borderRadius: 999,
										border: '1px solid #334155',
									}}
								>
									{b}
								</span>
							))}
						</div>
					</div>

					<div
						style={{
							background: '#F8FAFC',
							borderRadius: 18,
							border: '2px solid #1E293B',
							padding: 24,
							display: 'flex',
							flexDirection: 'column',
							gap: 0,
						}}
					>
						{stats.map((s, i) => (
							<div
								key={s.label}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'baseline',
									padding: '14px 0',
									borderBottom:
										i < stats.length - 1 ? '1px solid #E2E8F0' : 'none',
								}}
							>
								<span style={{ color: '#334155', fontSize: 15 }}>
									{s.label}
								</span>
								<span
									style={{
										color: '#0F172A',
										fontWeight: 700,
										fontSize: 22,
										fontFamily: 'Montserrat, sans-serif',
									}}
								>
									{s.value}
								</span>
							</div>
						))}
						<div
							style={{
								background: '#FDF2E8',
								borderRadius: 12,
								padding: 18,
								display: 'flex',
								flexDirection: 'column',
								gap: 8,
								marginTop: 16,
							}}
						>
							<p
								style={{
									color: '#1E293B',
									fontSize: 15,
									lineHeight: 1.55,
									margin: 0,
								}}
							>
								"They handled our hail claim and had the roof replaced quickly
								with excellent cleanup."
							</p>
							<span style={{ color: '#475569', fontSize: 13, fontWeight: 600 }}>
								— Homeowner, Brooklyn Park
							</span>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
