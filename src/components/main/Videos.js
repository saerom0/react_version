import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Modal from '../common/Modal';

function Videos() {
	const [index, setIndex] = useState(0);
	let [num, setNum] = useState(0);
	let [active, setActive] = useState(0);
	const vids = useSelector((store) => store.youtube.data);
	const modal = useRef(null);
	const len = 8;
	const frame = useRef(null);
	const frameMo = useRef(null);

	const prev = (e) => {
		setActive((active) => (active === 0 ? (active = len - 1) : --active));
		setIndex((index) => (index === 0 ? (index = len - 1) : --index));
		activeBtn(e);
	};
	const next = (e) => {
		setActive((active) => (active === len - 1 ? (active = 0) : ++active));
		setIndex((index) => (index === len - 1 ? (index = 0) : ++index));
		activeBtn(e);
	};

	const vidRotate = (number) => {
		setNum(number);
		frame.current.style.transform = `rotate(${(360 / len) * num}deg)`;
		frameMo.current.style.transform = `rotate(${(360 / len) * num}deg)`;
	};

	const activeBtn = (e) => {
		e.target.classList.add('on');
	};
	const deactiveBtn = (e) => {
		e.target.parentElement.classList.remove('on');
	};

	return (
		<>
			<section id='videos' className='myScroll'>
				<div className='container'>
					<div id='vidList' ref={frame}>
						{vids.map((data, idx) => {
							const tit = data.snippet.title;
							const desc = data.snippet.description;
							let isOn = '';
							idx === active && (isOn = 'on');

							if (idx >= len) return null;
							return (
								<article
									className={isOn}
									key={idx}
									style={{
										transform: `rotate(${
											(360 / len) * idx
										}deg) translateX(138%)`,
									}}
								>
									<div className='imgWrap'>
										<div
											className='thumb'
											onClick={() => {
												setIndex(idx);
												modal.current.open();
											}}
										>
											<img
												src={data.snippet.thumbnails.high.url}
												alt={data.snippet.title}
											/>
										</div>
										<div className='content'>
											<h3>
												{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}
											</h3>
											<p>
												{desc.length > 100 ? desc.substr(0, 100) + '...' : desc}
											</p>
										</div>
									</div>
								</article>
							);
						})}
					</div>
					<div id='vidListMob' ref={frameMo}>
						{vids.map((data, idx) => {
							const tit = data.snippet.title;
							const desc = data.snippet.description;
							let isOn = '';
							idx === active && (isOn = 'on');

							if (idx >= len) return null;
							return (
								<article
									className={isOn}
									key={idx}
									style={{
										transform: `rotate(${
											(360 / len) * idx
										}deg) translateX(110%)`,
									}}
								>
									<div className='imgWrap'>
										<div
											className='thumb'
											onClick={() => {
												setIndex(idx);
												modal.current.open();
											}}
										>
											<img
												src={data.snippet.thumbnails.high.url}
												alt={data.snippet.title}
											/>
										</div>
										<div className='content'>
											<h3>
												{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}
											</h3>
											<p>
												{desc.length > 100 ? desc.substr(0, 100) + '...' : desc}
											</p>
										</div>
									</div>
								</article>
							);
						})}
					</div>
					<article className='vidIntro'>
						<h1>Shared Office</h1>
						<p className='vidDesc'>
							Our professional support team are highly trained to anticipate,
							meet your needs, whatever they may be.
						</p>
					</article>
					<ul className='navi'>
						<li
							className='prev'
							onClick={(e) => {
								vidRotate(++num);
								prev(e);
							}}
						>
							<p
								onAnimationEnd={(e) => {
									deactiveBtn(e);
								}}
							>
								<span></span>
							</p>
						</li>
						<li
							className='play'
							onClick={() => {
								modal.current.open();
							}}
						>
							<FontAwesomeIcon icon={faPlay} />
						</li>
						<li
							className='next'
							onClick={(e) => {
								vidRotate(--num);
								next(e);
							}}
						>
							<p
								onAnimationEnd={(e) => {
									deactiveBtn(e);
								}}
							>
								<span></span>
							</p>
						</li>
					</ul>
				</div>
			</section>

			<Modal ref={modal}>
				<iframe
					title={vids[index]?.id}
					src={`https://www.youtube.com/embed/${vids[index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Videos;
