import { useRef, useEffect, useCallback } from 'react';

function Visual() {
	const btns = useRef(null);
	const panel = useRef(null);
	const btnStart = useRef(null);
	const btnStop = useRef(null);

	const num = useRef(0);
	const len = 3;
	const interval = 4000;
	const timer = useRef(null);
	const url = process.env.PUBLIC_URL;

	const activation = (index) => {
		for (const el of btns.current.children) el.classList.remove('on');
		for (const el of panel.current.children) el.classList.remove('on');
		btns.current.children[index].classList.add('on');
		panel.current.children[index].classList.add('on');
		num.current = index;
	};

	const rolling = useCallback(() => {
		num.current < len - 1 ? num.current++ : (num.current = 0);
		activation(num.current);
	}, []);

	const startRolling = useCallback(() => {
		activation(num.current);
		timer.current = setInterval(rolling, interval);

		btnStart.current.classList.add('on');
		btnStop.current.classList.remove('on');
	}, [rolling]);

	const stopRolling = () => {
		console.log('stop');
		clearInterval(timer.current);

		btnStop.current && btnStop.current.classList.add('on');
		btnStart.current && btnStart.current.classList.remove('on');
	};

	useEffect(() => {
		console.log('init');
		btns.current.children[0].classList.add('on');
		startRolling();

		return () => stopRolling();
	}, [startRolling]);

	return (
		<figure id='visual' className='myScroll'>
			<ul className='panel' ref={panel}>
				<li>
					<img src={`${url}/img/mainbg1.jpg`} alt={1} />
				</li>
				<li>
					<img src={`${url}/img/mainbg2.jpg`} alt={1} />
				</li>
				<li>
					<img src={`${url}/img/mainbg3.jpg`} alt={1} />
				</li>
			</ul>

			<ul className='btns' ref={btns}>
				{Array(len)
					.fill()
					.map((_, idx) => (
						<li
							key={idx}
							onClick={() => {
								activation(idx);
								stopRolling();
							}}
						></li>
					))}
			</ul>

			<div className='container'>
				<div className='cp-name'>
					<h1 className='hidden'>REAL SUITE</h1>
					<img src={`${url}/img/cp_name.png`} alt={'logo'} />
				</div>
			</div>

			<nav>
				<span className='btnStart' ref={btnStart} onClick={startRolling}>
					start
				</span>
				<span className='btnStop on' ref={btnStop} onClick={stopRolling}>
					stop
				</span>
			</nav>
		</figure>
	);
}

export default Visual;
