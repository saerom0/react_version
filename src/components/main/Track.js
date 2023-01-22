import { useState } from 'react';

function Track() {
	const [record, setRecord] = useState([
		`prime locations in World's CBDs`,
		'years in business',
		'% grade A+ Buildings',
		'+ businesses served',
	]);
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
							<div key={idx}>
								<img
									src={`${process.env.PUBLIC_URL}/img/${idx + 1}.png`}
									alt={idx}
								/>
								<p className='record_1'>5</p> {el}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Track;
