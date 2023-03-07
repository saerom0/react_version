import { useRef, useEffect, useCallback } from 'react';
import Anime from '../../asset/anime';

/* 스크롤 함수 */
function Btns({ setScrolled, setPos }) {
	const pos = useRef([]);
	const num = useRef(6);
	const speed = useRef(500);
	const btnRef = useRef(null);

	const getPos = useCallback(() => {
		pos.current = [];
		const sections = btnRef.current.parentElement.querySelectorAll('.myScroll');
		for (const section of sections) pos.current.push(section.offsetTop);
		setPos(pos.current);
		// console.log(pos.current);
	}, [setPos]);

	/* 활성화 함수 */
	const activation = useCallback(() => {
		const btns = btnRef.current.children;
		const sections = btnRef.current.parentElement.querySelectorAll('.myScroll');
		const scroll = window.scrollY || window.pageYOffset;
		const base = -window.innerHeight / 3;
		setScrolled(scroll);

		pos.current.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const section of sections) section.classList.remove('on');
				btns[idx]?.classList.add('on');
				sections[idx].classList.add('on');
			}
		});
	}, [setScrolled]);

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, [getPos, activation]);

	return (
		<ul className='scroll_nav' ref={btnRef}>
			{Array(num.current)
				.fill()
				.map((_, idx) => {
					let isOn = '';
					idx === 0 && (isOn = 'on');
					return (
						<li
							key={idx}
							className={isOn}
							onClick={() => {
								new Anime(window, {
									prop: 'scroll',
									value: pos.current[idx],
									duration: speed.current,
								});
							}}
						></li>
					);
				})}
		</ul>
	);
}

export default Btns;
