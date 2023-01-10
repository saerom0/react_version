import { useState } from 'react';
import { Link } from 'react-router-dom';

function Banner() {
	const [banner, setBanner] = useState([
		'MODERN OFFICE OVER 150 OFFER',
		'FIRST CHOICE FOR GLOBAL WORKPLAC',
		'OFFICES WITH THE LATEST FACILITIES',
	]);
	return (
		<section id='banner' className='myScroll'>
			<div className='inner'>
				<section>
					{banner.map((el, idx) => {
						return (
							<div>
								<img
									src={`${process.env.PUBLIC_URL}/img/office${idx + 1}.jpg`}
									alt={`office${idx}`}
								/>
								<p>{el}</p>
								<Link to='/'>CLICK HERE</Link>
							</div>
						);
					})}
				</section>
				<ul className='bn_btn'>
					{banner.map((el, idx) => {
						return (
							<li>
								<Link to='#'></Link>
							</li>
						);
					})}
				</ul>
				{/* <ul className='bn_btn'>
					<li className='on'>
						<Link to='#'></Link>
					</li>
					<li>
						<Link to='#'></Link>
					</li>
					<li>
						<Link to='#'></Link>
					</li>
				</ul> */}
			</div>
		</section>
	);
}

export default Banner;
