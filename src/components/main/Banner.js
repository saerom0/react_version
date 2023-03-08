import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Anime from '../../asset/anime';

function Banner() {
	const [banner] = useState([
		'MODERN OFFICE OVER 150 OFFER',
		'FIRST CHOICE FOR GLOBAL WORKPLAC',
		'OFFICES WITH THE LATEST FACILITIES',
	]);
	const bnBtn = useRef(null);
	const bnDiv = useRef(null);

	function activate(index) {
		console.log(bnDiv);
		new Anime(bnDiv.current, {
			prop: 'margin-left',
			value: -100 * index + '%',
			duration: 1000,
		});
		for (let btn of bnBtn.current.children) btn.classList.remove('on');
		bnBtn.current.children[index].classList.add('on');

		let isOn = bnBtn.current.children[index].classList.contains('on');
		if (isOn) return;
	}

	return (
		<section id='banner' className='myScroll'>
			<div className='container'>
				<section ref={bnDiv}>
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
				<ul className='bn-btn on' ref={bnBtn}>
					{banner.map((_, idx) => {
						return (
							<li key={idx}>
								<Link
									to='/'
									onClick={(e) => {
										e.preventDefault();
										activate(idx);
									}}
								></Link>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default Banner;
