import { useRef, useEffect } from 'react';

function Visual() {
	const panel = useRef(null);
	const vs_btn = useRef(null);
	const url = process.env.PUBLIC_URL;

	const interval = useRef(4000);
	let vs_num = useRef(0);
	let timer = useRef(null);

	useEffect(() => startRolling);
	//패널 활성화 함수
	const activation = (idx) => {
		const panels = panel.current.children;
		const vs_btns = vs_btn.current.children;
		for (const el of panels) el.classList.remove('on');
		for (const el of vs_btns) el.classList.remove('on');
		panels[idx].classList.add('on');
		vs_btns[idx].classList.add('on');
		vs_num = idx;
	};

	//롤링 함수
	const rolling = () => {
		const panels = panel.current.children;
		const len = panels.current.length - 1;
		vs_num < len ? vs_num++ : (vs_num = 0);
		activation(vs_num);
	};

	//롤링 시작 함수
	const startRolling = () => {
		activation(vs_num);
		timer.current = setInterval(rolling, interval);
	};

	//버튼 활성화 함수
	const on_page = (idx) => {
		activation(idx);
	};

	return (
		<section id='visual' className='page'>
			<div className='visual'>
				<ul className='panel' ref={panel}>
					<li data-index='0'>
						<img src={url + '/img/mainbg1.jpg'} alt='1' />
					</li>
					<li data-index='1'>
						<img src={url + '/img/mainbg2.jpg'} alt='1' />
					</li>
					<li data-index='2'>
						<img src={url + '/img/mainbg1.jpg'} alt='1' />
					</li>
				</ul>

				<ul className='pagenation' ref={vs_btn}>
					<li className='on' onClick={() => on_page(0)}></li>
					<li onClick={() => on_page(1)}></li>
					<li onClick={() => on_page(2)}></li>
				</ul>
				{/* <div className="inner">
                <div className="cp_name">
                    <h1 className="hidden">REAL SUITE</h1>
                    <img src={url+"img/cp_name.png"} alt="회사명이 세로로 세겨진 이미지" />
                </div>
            </div> */}
			</div>
		</section>
	);
}

export default Visual;
