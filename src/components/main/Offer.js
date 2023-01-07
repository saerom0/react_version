import { useState } from 'react';
import { Link } from 'react-router-dom';

function Offer() {
	const [offer, setOffer] = useState([
		'VESTIBULUM AENEAN',
		'NONUMMY ENDRERIT',
		'MONTES MAURIS',
		'CUM NATOQUE',
		'offer5',
		'1인 사무공간',
	]);
	const icon_star = '<i class="fas fa-star"></i>';
	const url = process.env.PUBLIC_URL;
	return (
		<section id='offer' className='myScroll'>
			<div className='inner'>
				<h1>SPECIAL OFFER</h1>
				<section className='wrap'>
					{offer.map((el, idx) => {
						return (
							<article>
								<div key={idx} className='frame'>
									<div className='pic'>
										<img src={`${url}/img/offer${idx + 1}.jpg`} alt={el} />
									</div>
								</div>
								<h2>
									<Link to='/'>{el}</Link>
								</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</article>
						);
					})}
				</section>
			</div>
		</section>
	);
}

export default Offer;
