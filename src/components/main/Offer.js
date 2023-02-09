import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Offer() {
	const [offer] = useState([
		'VESTIBULUM AENEAN',
		'NONUMMY ENDRERIT',
		'MONTES MAURIS',
		'CUM NATOQUE',
	]);
	const icon_star = <FontAwesomeIcon className='star' icon={faStar} />;
	const url = process.env.PUBLIC_URL;
	return (
		<section id='offer' className='myScroll'>
			<div className='container'>
				<h1>SPECIAL OFFER</h1>
				<section className='wrap'>
					{offer.map((el, idx) => {
						return (
							<article key={idx}>
								<div className='frame'>
									<div className='pic'>
										<img src={`${url}/img/offer${idx + 1}.jpg`} alt={el} />
										<div className='stars'>
											{icon_star}
											{icon_star}
											{icon_star}
											{icon_star}
											{icon_star}
										</div>
									</div>
									<button className='btn_offer'>VIEW MORE</button>
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
