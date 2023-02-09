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
			<div className='container'>
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
							<p className='contact-subtitle'>Office hours</p>
							<span>Weekday: From 9 to 18</span>
							<p className='contact-contents'>
								Closed weekends & public holidays
							</p>
						</div>
						<div>
							<p className='contact-subtitle'>Email Us</p>
							<p className='contact-contents'>jinxinsr@naver.com</p>
						</div>
						<div>
							<p className='contact-subtitle'>Call Us</p>
							<p className='contact-contents'>(254) 3968 5687</p>
						</div>
						<div>
							<p className='contact-subtitle'>Follow</p>
							<div className='sns-icons'>
								<FontAwesomeIcon icon={faTwitterSquare} className='sns-icon' />
								<FontAwesomeIcon
									icon={faInstagramSquare}
									className='sns-icon'
								/>
								<FontAwesomeIcon icon={faFacebookSquare} className='sns-icon' />
								<FontAwesomeIcon icon={faYoutube} className='sns-icon' />
							</div>
						</div>
					</section>
				</div>
				<Map />
				<Qna />
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
		<section className='map'>
			<h2>Location</h2>
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
		</section>
	);
}

function Qna() {
	return (
		<section className='qna'>
			<div className='contents'>
				<p className='sub-title'>
					Frequently
					<br /> Asked Questions
				</p>
				<div className='tab'>
					<input type='checkbox' name='info' id='info1' />
					<label htmlFor='info1'>
						<h3>01</h3>
						<h4>What is a serviced office?</h4>
					</label>
					<div className='information'>
						<p>
							Also known as managed offices, business centers and executive
							suites, serviced offices provide fully-equipped facilities managed
							by a service facility management company. They empower businesses,
							from start-ups to small-, medium-sized enterprises and large-scale
							companies to rent office spaces that are suitable and customizable
							to their needs. Naturally, a serviced office room can cater to as
							few as one individual and as many as 20 persons.
						</p>
					</div>
				</div>

				<div className='tab'>
					<input type='checkbox' name='info' id='info2' />
					<label htmlFor='info2'>
						<h3>02</h3>
						<h4>What is a virtual office?</h4>
					</label>
					<div className='information'>
						<p>
							A virtual office is a substitute for the traditional work
							environment, and delivers results through the web, telephone and
							other technologies. Virtual offices operate without any actual
							physical office space; all operations (whether internal or
							external business processes and communication) are performed via
							the Internet and phone lines. Employee(s) work remotely and
							perform daily office tasks with the use of software and
							application tools dependent on the Internet. Most virtual offices
							offer a business address for postal communication and secretarial
							support.
						</p>
					</div>
				</div>

				<div className='tab'>
					<input type='checkbox' name='info' id='info3' />
					<label htmlFor='info3'>
						<h3>03</h3>
						<h4>What is a co-working space, or shared office?</h4>
					</label>
					<div className='information'>
						<p>
							In a nutshell, the term refers to a space that provides fully
							equipped and fully furnished workstations that are ready for use
							and perfect for entrepreneurs and freelancers who choose not to
							work from home, and/or branch office/s. Co-working spaces are
							offered at a much lower price than traditional working spaces and
							offer more flexibility with daily, weekly and monthly access.
							Facilities such as mail handling, telephone, internet and admin
							support can all be made available.
						</p>
					</div>
				</div>

				<div className='tab'>
					<input type='checkbox' name='info' id='info4' />
					<label htmlFor='info4'>
						<h3>04</h3>
						<h4>
							What are the differences between office space and a dedicated
							workstation?
						</h4>
					</label>
					<div className='information'>
						<p>
							Co-working space is available by the day, week and month during
							office hours. A co-working client has access to either an
							unassigned work desk or workspace in a common area such as a
							business lounge with high-speed internet access. A dedicated
							workstation offers greater exclusivity, with 24/7 access to their
							own assigned workspace.
						</p>
					</div>
				</div>

				<div className='tab'>
					<input type='checkbox' name='info' id='info5' />
					<label htmlFor='info5'>
						<h3>05</h3>
						<h4>
							Are serviced offices better value than traditional office space?
						</h4>
					</label>
					<div className='information'>
						<p>
							This really depends on several varying factors, such as location,
							building facilities and the included amenities. On its own,
							traditional office space may be less expensive than serviced
							offices but you’d only be getting an empty space. Additional
							expenses with traditional office space usually include overheads
							such as building dues, electricity, office space set-up, IT
							set-up, office furniture, telephone lines and office space
							interiors. Serviced office spaces are offered at a higher price
							because they already include all of these costs. Most importantly,
							serviced office spaces buy you more time for your business so you
							can focus on the more important matters and keep your business
							running smoothly.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Contact;
