import { FaHouseMedicalCircleExclamation } from 'react-icons/fa6';
import Container from './Container';
import { BsHouseAdd } from 'react-icons/bs';

export default function Nav() {
	return (
		<nav
			style={{
				background: '#fff',
				borderBottom: '1px solid #D9D6CC',
				position: 'sticky',
				top: 0,
				zIndex: 50,
			}}
		>
			<Container
				style={{
					height: 72,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 24,
				}}
			>
				{/* Brand */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 10,
						flexShrink: 0,
					}}
				>
					<div
						style={{
							width: 44,
							height: 44,
							borderRadius: 10,
							background: '#1F3348',
							border: '2px solid #D66A2E',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<span
							style={{
								color: '#fff',
								fontWeight: 700,
								fontSize: 24,
								fontFamily: 'Montserrat, sans-serif',
							}}
						>
							<BsHouseAdd />
						</span>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<span
							style={{
								color: '#1F3348',
								fontWeight: 700,
								fontSize: 14,
								fontFamily: 'Montserrat, sans-serif',
								lineHeight: 1.2,
							}}
						>
							Coyocala
						</span>
						<span
							style={{
								color: '#D66A2E',
								fontWeight: 700,
								fontSize: 12,
								fontFamily: 'Montserrat, sans-serif',
								lineHeight: 1.2,
							}}
						>
							Roofing
						</span>
					</div>
				</div>

				{/* Menu */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
					{['Services', 'Projects', 'Reviews', 'Contact'].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							style={{
								color: '#364A5E',
								fontSize: 15,
								textDecoration: 'none',
								whiteSpace: 'nowrap',
							}}
						>
							{item}
						</a>
					))}
				</div>

				{/* CTA */}
				<a
					href="tel:7635550198"
					style={{
						flexShrink: 0,
						background: '#D66A2E',
						color: '#FFF7F1',
						fontWeight: 700,
						fontSize: 14,
						padding: '10px 18px',
						borderRadius: 999,
						textDecoration: 'none',
						whiteSpace: 'nowrap',
					}}
				>
					Call 763-555-0198
				</a>
			</Container>
		</nav>
	);
}
