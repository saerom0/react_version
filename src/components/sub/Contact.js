import Layout from '../common/Layout';
import { useRef, useEffect, useState, useMemo } from 'react';
import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
	return (
		<Layout name={'Contact'}>
			<h1>Contact Us</h1>
			<div className='enquire'>
				<h2>Request for consultation</h2>
				<form className='form'>
					<input type='text' placeholder={'Name'} required />
					<input type={'text'} placeholder={'Phone Number'} required />
					<input type={'text'} placeholder='email' required />
					<input type={'text'} placeholder={'Enquire contents'} required />
					<input type={'submit'} value={'SUBMIT'} />
				</form>
				<section className='info'>
					<div>
						<p className='contactSubtitle'>Office hours</p>
						<span>Weekday: From 9 to 18</span>
						<p className='contactContents'>Closed weekends & public holidays</p>
					</div>
					<div>
						<p className='contactSubtitle'>Email Us</p>
						<p className='contactContents'>jinxinsr@naver.com</p>
					</div>
					<div>
						<p className='contactSubtitle'>Call Us</p>
						<p className='contactContents'>(254) 3968 5687</p>
					</div>
					<div>
						<p className='contactSubtitle'>Follow</p>
						<div className='snsIcons'>
							<FontAwesomeIcon icon={faTwitterSquare} className='snsIcon' />
							<FontAwesomeIcon icon={faInstagramSquare} className='snsIcon' />
							<FontAwesomeIcon icon={faFacebookSquare} className='snsIcon' />
							<FontAwesomeIcon icon={faYoutube} className='snsIcon' />
						</div>
					</div>
				</section>
			</div>
			<Map />
		</Layout>
	);
}

function Map() {
	const { kakao } = window;
	const [traffic, setTraffic] = useState(false);
	const [index, setIndex] = useState(0);
	const mapInstance = useRef(null);
	const option = useRef(null);
	const info = useRef(null);
	const container = useRef(null);

	info.current = [
		{
			title: '강남',
			latlng: new kakao.maps.LatLng(37.4960607, 127.0279746),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker1.png`,
			imgSize: new kakao.maps.Size(60, 80),
			imgPos: { offset: new kakao.maps.Point(30, 99) },
		},
		{
			title: '광화문',
			latlng: new kakao.maps.LatLng(37.5745826, 126.9792381),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker1.png`,
			imgSize: new kakao.maps.Size(60, 80),
			imgPos: { offset: new kakao.maps.Point(30, 99) },
		},
		{
			title: '서울스퀘어',
			latlng: new kakao.maps.LatLng(37.5554992, 126.9735873),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker1.png`,
			imgSize: new kakao.maps.Size(60, 80),
			imgPos: { offset: new kakao.maps.Point(30, 99) },
		},
	];

	option.current = {
		center: info.current[index].latlng,
		level: 3,
	};

	const imageSrc = info.current[index].imgUrl;
	const imageSize = info.current[index].imgSize;
	const imageOption = info.current[index].imgPos;

	const markerImage = useMemo(
		() => new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		[imageSrc, imageSize, imageOption, kakao]
	);

	const mapTypeControl = useMemo(
		() => new kakao.maps.MapTypeControl(),
		[kakao]
	);

	const zoomControl = useMemo(() => new kakao.maps.ZoomControl(), [kakao]);

	const marker = useMemo(() => {
		return new kakao.maps.Marker({
			position: info.current[index].latlng,
			image: markerImage,
		});
	}, [kakao, info, index, markerImage]);

	useEffect(() => {
		container.current.innerHTML = '';
		mapInstance.current = new kakao.maps.Map(container.current, option.current);
		marker.setMap(mapInstance.current);
		mapInstance.current.addControl(
			mapTypeControl,
			kakao.maps.ControlPosition.TOPRIGHT
		);
		mapInstance.current.addControl(
			zoomControl,
			kakao.maps.ControlPosition.LEFT
		);
		mapInstance.current.setZoomable(false);

		const setCenter = () => {
			mapInstance.current.setCenter(info.current[index].latlng);
		};
		window.addEventListener('resize', setCenter);

		return () => {
			window.removeEventListener('resize', setCenter);
		};
	}, [index, kakao, option, info, marker, mapTypeControl, zoomControl]);

	useEffect(() => {
		traffic
			? mapInstance.current.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: mapInstance.current.removeOverlayMapTypeId(
					kakao.maps.MapTypeId.TRAFFIC
			  );
	}, [traffic, kakao]);

	return (
		<section className='map'>
			<h2>Location</h2>
			<div id='map' ref={container}></div>
			<nav className='traffic'>
				<button onClick={() => setTraffic(!traffic)}>
					{traffic ? 'Traffic ON' : 'Traffic OFF'}
				</button>

				<ul className='branch'>
					{info.current.map((el, idx) => {
						let isOn = '';

						index === idx && (isOn = 'on');
						return (
							<li
								key={idx}
								className={isOn}
								onClick={() => {
									setIndex(idx);
									setTraffic(false);
								}}
							>
								{el.title}
							</li>
						);
					})}
				</ul>
			</nav>
		</section>
	);
}

export default Contact;
