import { useCallback, useState } from 'react';

function Track() {
	const [record] = useState([
		`prime locations in World's CBDs`,
		'years in business',
		'% grade A+ Buildings',
		'+ businesses served',
	]);
	// const counter = (el, num, time) => {
	// 	let current_num = parseInt(el.innerText);
	// 	let count_num = num - current_num;
	// 	let interval = parseInt(time / count_num);
	// 	if (current_num === num) {
	// 		return;
	// 	} else {
	// 		let timer = setInterval(() => {
	// 			current_num++;
	// 			if (current_num === num) {
	// 				clearInterval(timer);
	// 			}
	// 			el.innerText = current_num;
	// 		}, interval);
	// 	}
	// };

	// const activeCount = useCallback(() => {
	// 	let numbers = number.current.querySelectorAll('.record-count');
	// 	if (IsLoad && number.current.closest('section').classList.contains('on')) {
	// 		counter(numbers[0], 977, 1000);
	// 		counter(numbers[1], 544, 1000);
	// 		counter(numbers[2], 15, 1000);
	// 		counter(numbers[3], 9, 1000);
	// 	}
	// }, [IsLoad]);
	return (
		<section id='track' className='myScroll'>
			<div className='container'>
				<h1>OUR TRACK RECORD</h1>
				<figure>
					<video
						className='cp_vid'
						src={`${process.env.PUBLIC_URL}/img/wework.mp4`}
						autoPlay
						loop
						muted
					>
						<span className='hidden'>회사홍보동영상</span>
					</video>
				</figure>

				<div className='record'>
					{record.map((el, idx) => {
						return (
							<>
								<div key={idx}>
									<img
										src={`${process.env.PUBLIC_URL}/img/${idx + 1}.png`}
										alt={idx}
									/>
									{el}
								</div>
								<span className='record-count'>0</span>
								<span className='record-count'>5</span>
								<span className='record-count'>5</span>
								<span className='record-count'>5</span>
							</>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Track;
