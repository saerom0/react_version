import { Link } from 'react-router-dom';

function Promo() {
	return (
		<section id='promo'>
			<div class='inner'>
				<div class='wrap'>
					<h1 class='promo_text'>
						<span>GETTING 25% OFF</span>
					</h1>
					<p>
						<span>for annual membership</span>
					</p>
					<Link to='/'>LEARN MORE</Link>
				</div>

				<div class='wrap2'>
					<p>BUSINESS MULTINATIONALS</p>
					<p>REPRESENTATIVE OFFICE</p>
					<p>FLEXIBLE SHORT-TERM SWING SPACE</p>
					<p>RISK-FREE NEW MARKET ENTRY</p>
					<p>SUITABLE FOR START-UP</p>
					<p>VIBRANT COMMUNITY EVENT SPACE</p>
					<p>BUSINESS NETWORKING</p>
					<p>SHORT-TERM SWING SPACE</p>
				</div>
			</div>
		</section>
	);
}

export default Promo;
