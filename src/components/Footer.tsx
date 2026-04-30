import Container from './Container';

export default function Footer() {
	return (
		<footer style={{ background: '#0B1220', width: '100%' }}>
			<Container
				style={{
					paddingTop: 28,
					paddingBottom: 28,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<span
					style={{
						color: '#F8FAFC',
						fontWeight: 700,
						fontSize: 18,
						fontFamily: 'Montserrat, sans-serif',
					}}
				>
					Coyocala Roofing
				</span>
				<span style={{ color: '#94A3B8', fontSize: 14 }}>
					© 2026{' '}
					<a
						href="https://pixelforgelabs.co"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: '#94A3B8', textDecoration: 'underline' }}
					>
						PixelForge Labs
					</a>
					. All rights reserved.
				</span>
			</Container>
		</footer>
	);
}
