import { useState } from 'react';
import { Link } from 'react-router-dom';

function Banner() {
	const [bannerBg, setBannerBg] = useState(['office1', 'office2', 'office3']);
	return (
		<section id='banner' className='myScroll'>
			<div className='inner'>
				<h1>클릭하면 패널바뀌는 3장 슬라이더</h1>
				<section>
					{bannerBg.map((el) => {
						return (
							<div>
								<img src={`${process.env.PUBLIC_URL}/img/${el}.jpg`} alt={el} />
								<span>{el}</span>
								<p>MODERN OFFICE OVER 150 OFFER</p>
								<Link to='/' href=''>
									CLICK HERE
								</Link>
							</div>
						);
					})}
				</section>
				<ul className='bn_btn'>
					{bannerBg.map((el, idx) => {
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
