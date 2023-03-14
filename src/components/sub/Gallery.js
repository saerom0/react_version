import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';
import Modal from '../common/Modal';
import { fetchFlickr } from '../../redux/flickrSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
	const dispatch = useDispatch();
	const myId = '197108414@N08';
	const masonryOptions = { transitionDuration: '0.5s' };
	const frame = useRef(null);
	const input = useRef(null);
	const modal = useRef(null);
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);

	const Items = useSelector((store) => store.flickr.data);

	const showInterest = () => {
		dispatch(fetchFlickr({ type: 'interest' }));
		frame.current.classList.remove('on');
		setLoading(true);
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요');
		input.current.value = '';
		dispatch(fetchFlickr({ type: 'search', tags: result }));
		frame.current.classList.remove('on');
		setLoading(true);
	};

	const showMine = () => {
		dispatch(fetchFlickr({ type: 'user', user: myId }));
		frame.current.classList.remove('on');
		setLoading(true);
	};

	useEffect(() => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 500);
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [Items]);

	return (
		<>
			<Layout name={'Gallery'}>
				<div className='container'>
					<h1>GALLERY</h1>
					<div id='gallery'>
						<h2 onClick={showMine}>SIGHTSEEING</h2>
						<div className='searchBox'>
							<button className='interestBtn' onClick={showInterest}>
								<FontAwesomeIcon className='arrow' icon={faArrowRight} />
								TO OTHER PICTURES
							</button>
							<input
								type='text'
								ref={input}
								placeholder='검색어 입력'
								onKeyUp={(e) => e.key === 'Enter' && showSearch()}
							/>
							<button className='searchBtn' onClick={showSearch}>
								Search
							</button>
						</div>

						<section className='galleryTitle'>
							<p>
								All you need for business success. Stay inspired in a shared
								environment with like-minded individuals pursuing their passions
								and become part of a creative community that stretches
							</p>
							<p>
								Lower your costs and save time with our business concierge,
								professional and technical services.
							</p>
							<p>
								We provide on-demand services from translation to company
								registration so you are free to fully focus on your business.
							</p>
						</section>
					</div>

					{loading && (
						<img
							className='loading'
							src={`${process.env.PUBLIC_URL}/img/loading.gif`}
							alt='로딩이미지'
						/>
					)}

					<div className='frame' ref={frame}>
						<Masonry elementType={'div'} options={masonryOptions}>
							{Items.map((item, idx) => {
								return (
									<article key={idx}>
										<div className='inner'>
											<div
												className='pic'
												onClick={() => {
													setIndex(idx);
													modal.current.open();
												}}
											>
												<img
													src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
													alt={item.title}
												/>
											</div>
											<span>{item.title}</span>

											<img
												className='profile'
												src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
												alt={item.owner}
												onError={(e) =>
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													)
												}
											/>
										</div>
									</article>
								);
							})}
						</Masonry>
					</div>
				</div>
			</Layout>

			<Modal ref={modal}>
				<img
					src={`https://live.staticflickr.com/${Items[index]?.server}/${Items[index]?.id}_${Items[index]?.secret}_b.jpg`}
					alt={Items[index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Gallery;
