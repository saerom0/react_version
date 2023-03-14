import Layout from '../common/Layout';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../common/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const modal = useRef(null);
	const [index, setIndex] = useState(0);
	const Vids = useSelector((store) => store.youtube.data);

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	});
	return (
		<>
			<Layout name={'Youtube'}>
				<h1>YOUTUBE</h1>
				<article className='youtubeTitleLeft'>
					<p className='titleSub1'>
						Enjoy superior working conditions, including state-of-the-art
						equipment and technical support staff who will help you with any
						specific requirements.
					</p>
					<h2>THE</h2>
					<h3>REAL OFFICE</h3>
				</article>
				<article className='youtubeTitleRight'>
					<span>
						<FontAwesomeIcon icon={faPlay} />
					</span>
					<p>
						Our professional support team are highly trained to anticipate, meet
						your needs, whatever they may be.
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
			</Layout>

			<Modal ref={modal}>
				<iframe
					title={Vids[0]?.id}
					src={`https://www.youtube.com/embed/${Vids[index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
