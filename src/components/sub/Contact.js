import Layout from '../common/Layout';
import { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
	const [input, setInput] = useState([
		'Name',
		'Phone',
		'E-mail',
		'Enquire contents',
	]);

	return (
		<Layout name={'Contact'}>
			<div className='container'>
				<div className='enquire'>
					<h2>Request for consultation</h2>
					<form className='form'>
						<input type={'text'} placeholder={'Name'} required />
						<input type={'text'} placeholder={'Phone Number'} required />
						<input type={'text'} placeholder='email' required />
						<input type={'text'} placeholder={'Enquire contents'} required />
						<input type={'submit'} value={'SUBMIT'} />
					</form>
					<section className='info'>
						<div>
							Email Us
							<p>jinxinsr@naver.com</p>
						</div>
						<div>
							Call Us
							<p>(254) 3968 5687</p>
						</div>
						<div>
							Follow
							<div className='sns-icons'>
								<FontAwesomeIcon icon={faTwitterSquare} />
								<FontAwesomeIcon icon={faInstagramSquare} />
								<FontAwesomeIcon icon={faFacebookSquare} />
								<FontAwesomeIcon icon={faYoutube} />
							</div>
						</div>
					</section>
				</div>
				<Map />
			</div>
		</Layout>
	);
}

function Map() {
	const { kakao } = window;
	const [Traffic, setTraffic] = useState(false);
	const [Index, setIndex] = useState(0);
	const mapInstance = useRef(null);
	const option = useRef(null);
	const info = useRef(null);
	const container = useRef(null);

	info.current = [
		{
			title: '강남',
			latlng: new kakao.maps.LatLng(37.4960607, 127.0279746),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker1.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '광화문',
			latlng: new kakao.maps.LatLng(37.5745826, 126.9792381),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker2.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '서울스퀘어',
			latlng: new kakao.maps.LatLng(37.5554992, 126.9735873),
			imgUrl: `${process.env.PUBLIC_URL}/img/marker3.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];

	option.current = {
		center: info.current[Index].latlng,
		level: 3,
	};

	const imageSrc = info.current[Index].imgUrl;
	const imageSize = info.current[Index].imgSize;
	const imageOption = info.current[Index].imgPos;

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
			position: info.current[Index].latlng,
			image: markerImage,
		});
	}, [kakao, info, Index, markerImage]);

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
			mapInstance.current.setCenter(info.current[Index].latlng);
		};
		window.addEventListener('resize', setCenter);

		return () => {
			window.removeEventListener('resize', setCenter);
		};
	}, [Index, kakao, option, info, marker, mapTypeControl, zoomControl]);

	useEffect(() => {
		Traffic
			? mapInstance.current.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: mapInstance.current.removeOverlayMapTypeId(
					kakao.maps.MapTypeId.TRAFFIC
			  );
	}, [Traffic, kakao]);

	return (
		<>
			<div id='map' ref={container}></div>
			<nav className='traffic'>
				<button onClick={() => setTraffic(!Traffic)}>
					{Traffic ? 'Traffic ON' : 'Traffic OFF'}
				</button>

				<ul className='branch'>
					{info.current.map((el, idx) => {
						let isOn = '';

						Index === idx && (isOn = 'on');
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
		</>
	);
}

export default Contact;
