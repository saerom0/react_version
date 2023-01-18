// const key = 'AIzaSyCwLGRESuf8Zwcy3A9ufGkTyoUcRtYEu_Y';
// const playlist = 'PLKfwPBQMIxKDP60C-MiQuif3-9MB7RTHm';

import Layout from '../common/Layout';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../common/Modal';

function Youtube() {
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);
	const Vids = useSelector((store) => store.youtube.data);

	return (
		<>
			<Layout name={'Youtube'}>
				<h1>YOUTUBE</h1>
				<div className='container'>
					<article className='youtube-title-left'>
						<p className='title-sub1'>
							Enjoy superior working conditions, including state-of-the-art
							equipment and technical support staff who will help you with any
							specific requirements.
						</p>
						<h2>THE</h2>
						<h3>REAL OFFICE</h3>
					</article>
					<article className='youtube-title-right'>
						<span>▶</span>
						<p>
							Our professional support team are highly trained to anticipate,
							meet your needs, whatever they may be.
						</p>
						<figure>
							<img
								src={`${process.env.PUBLIC_URL}/img/youtubeimg.png`}
								alt='youtube title img'
							/>
						</figure>
					</article>
					<div class='videoList'>
						{Vids.map((data, idx) => {
							const tit = data.snippet.title;
							const desc = data.snippet.description;
							const date = data.snippet.publishedAt;

							return (
								<article key={data.id}>
									<h4>{tit.length > 60 ? tit.substr(0, 60) + '...' : tit}</h4>

									<div className='txt'>
										<p>
											{desc.length > 100 ? desc.substr(0, 100) + '...' : desc}
										</p>
										<span>{date.split('T')[0]}</span>
									</div>

									<div
										className='pic'
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
								</article>
							);
						})}
					</div>
				</div>
			</Layout>

			<Modal ref={modal}>
				<iframe
					title={Vids[0]?.id}
					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
