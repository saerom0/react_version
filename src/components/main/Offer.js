import { useState } from 'react';

function Offer() {
	const [offer_alt, setOffer_alt] = useState([
		'서울 강남1호점 사무실 사진',
		'일본 오사카지점 사무실 사진',
		'홍콩 몽콕지점 사무실 사진',
	]);
	console.log(typeof offer_alt);
	console.log(offer_alt);
	return (
		<section id='offer' className='myScroll'>
			<h1>SPECIAL OFFER</h1>
			<section>
				{
					offer_alt.map((_, idx) => {
						return (
							<div key={idx}>
								<img
									src='img/office1.jpg'
									alt={() => setOffer_alt(offer_alt[idx])}
								/>
								<p>MODERN OFFICE</p>
								<br />
								<p>OVER 150 OFFER</p>
							</div>
						);
					})
					/* {offer_alt.map((el, idx) => {
					return (
						<div key={idx}>
							<img src='img/office1.jpg' alt={()=>setOffer_alt(offer_alt[idx])} />
							<p>MODERN OFFICE</p>
							<br />
							<p>OVER 150 OFFER</p>
							<Link to='#'>CLICK HERE</Link>
						</div>
					);
				})} */
				}
			</section>
		</section>
	);
}

export default Offer;
