import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Anime from '../../asset/anime';

function Banner() {
	const [banner] = useState([
		'MODERN OFFICE OVER 150 OFFER',
		'FIRST CHOICE FOR GLOBAL WORKPLAC',
		'OFFICES WITH THE LATEST FACILITIES',
	]);
	const bn_btn = useRef(null);
	const bn_div = useRef(null);

	function activate(index) {
		new Anime(bn_div, {
			prop: 'margin-left',
			value: -100 * index + '%',
			duration: 1000,
		});
		for (let btn of bn_btn.current.children) btn.classList.remove('on');
		bn_btn.current.children[index].add('on');
	}

	// let isOn = el.classList.contains('on');
	// if (isOn) return;

	return (
		<section id='banner' className='myScroll'>
			<div className='inner'>
				<section>
					{banner.map((el, idx) => {
						return (
							<div key={idx}>
								<img
									src={`${process.env.PUBLIC_URL}/img/office${idx + 1}.jpg`}
									alt={`office${idx}`}
								/>
								<p>{el}</p>
								<Link to='/office'>CLICK HERE</Link>
							</div>
						);
					})}
				</section>
				<ul className='bn_btn'>
					{banner.map((_, idx) => {
						return (
							<li
								key={idx}
								onClick={() => {
									activate(idx);
								}}
							>
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
