import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const pub = process.env.PUBLIC_URL;

function About() {
	const [qna, setQna] = useState([]);
	const [check_icon] = useState(
		<FontAwesomeIcon
			icon={faCheckCircle}
			className='check-icon'
		></FontAwesomeIcon>
	);
	const [cstype] = useState([
		'SERVICED OFFICE',
		'CO-WORKING SPACE',
		'VIRTUAL OFFICE',
		'MEETING ROOMS & CONFERENCE FACILITIES',
		'BUSINESS SUPPORT SERVICES',
	]);

	const activation = (el, e) => {
		el.classList.remove('on');
		!e.target.classList.contains('on') && e.target.classList.add('on');
	};

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/qna.json`).then((json) => {
			setQna(json.data.qna);
		});
	}, []);

	return (
		<Layout name={'About'}>
			<section>
				<div className='container'>
					<h1>Shared Office</h1>
					<section className='wrap-1'>
						<h2>BESPOKE PREMIUM SERVICED OFFICES THROUGHOUT ASIA</h2>
						<div className='intro'>
							<h3>01. Serviced Office</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
								fugiat maxime dignissimos unde sit! Hic.
							</p>
							<h3>02. Co-working Space</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
								fugiat maxime dignissimos unde sit! Hic.
							</p>
							<h3>03. Virtual Office</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
								fugiat maxime dignissimos unde sit! Hic.
							</p>
						</div>
						<div className='move'>
							<article className='circle'>
								<Link to='/review'>150+ OFFERS</Link>
							</article>
						</div>
					</section>
					<section className='wrap-2'>
						<article>
							<h2>
								PREMIUM SERVICED
								<br /> RUN BY MULTI-CULTURAL INDUSTRY EXPERTS
							</h2>
							<img
								src={`${process.env.PUBLIC_URL}/img/random.jpg`}
								alt='About page wrap2 image'
							/>
						</article>
					</section>
					<section className='wrap-3'>
						<div className='contents'>
							<p className='sub-title'>
								Learn more <br />
								about service types
							</p>
							<section id='service_type'>
								<nav>
									<ul>
										{cstype.map((el) => {
											return (
												<li onClick={activation}>
													<h3>{el}</h3>
												</li>
											);
										})}
										<li className='on'>
											<h3>SERVICED OFFICE</h3>
										</li>
										<li>
											<h3>CO-WORKING SPACE</h3>
										</li>
										<li>
											<h3>VIRTUAL OFFICE</h3>
										</li>
										<li>
											<h3>MEETING ROOMS & CONFERENCE FACILITIES</h3>
										</li>
										<li>
											<h3>BUSINESS SUPPORT SERVICES</h3>
										</li>
									</ul>

									<article className='on'>
										<h3>IDEAL FOR</h3>
										<p>{check_icon}Business corporations and multinationals</p>
										<p>{check_icon}Representative office and SMEs</p>
										<p>{check_icon}Flexible project space</p>
										<p>{check_icon}Short-term swing space</p>
										<p>{check_icon}Risk-free new market entry</p>
										<p>KRW 800,000 /PER MONTH</p>
									</article>

									<article>
										<h3>IDEAL FOR</h3>
										<p>{check_icon}Individuals and freelancers</p>
										<p>{check_icon}Business networking</p>
										<p>{check_icon}Innovative start-ups</p>
										<p>{check_icon}Vibrant community event space</p>
										<p>COWORKING DAY PASS : KRW 50,000 /PER DAY</p>
										<p>DEDICATED WORKSTATION : KRW 650,000 /PER MONTH</p>
									</article>

									<article>
										<h3>IDEAL FOR</h3>
										<p>{check_icon}Entrepreneurs working from home</p>
										<p>{check_icon}Start-ups with a limited budget</p>
										<p>{check_icon}SMEs with a regional presence</p>
										<p>{check_icon}Company registration address</p>
										<p>KRW 95,000 /PER MONTH</p>
									</article>

									<article>
										<h3>IDEAL FOR</h3>
										<p>{check_icon}Business meetings</p>
										<p>{check_icon}Corporate trainings</p>
										<p>{check_icon}Business travellers</p>
										<p>{check_icon}Home office users</p>
										<p>{check_icon}Training venue</p>
										<p>MEETING ROOMS : KRW 60,000 /PER HOUR</p>
										<p>VIDEO CONFERENCING : KRW 250,000 /PER HOUR</p>
									</article>

									<article>
										<p>{check_icon}Business Concierge</p>
										<p>{check_icon}Accounting & Tax consultation</p>
										<p>{check_icon}Web design and hosting</p>
										<p>{check_icon}New market entry support</p>
									</article>
								</nav>
							</section>
						</div>
					</section>
					<section className='wrap-4'>
						<h2>
							LOREM, IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. NOBIS
							SEQUI EXERCITATIONEM ILLO.
						</h2>
						<article>
							<h3>Our ipsum sit amet consectetur.</h3>
							<h3>
								Quote culpa veniam sedesse sequi ratione accusantium evenent
								nesciunt, temporibus in incidunt voluptate similique.
							</h3>
							<h3>
								accusamus nostrum expedita aliquid facilis reiciendis patiatur!
							</h3>
							<strong>All exports</strong>
						</article>
						<article>
							<img
								src={`${process.env.PUBLIC_URL}/img/member1.jpg`}
								alt='member1'
							/>
							<p className='member-name'>
								Susan
								<FontAwesomeIcon
									icon={faEnvelope}
									className='envelope'
								></FontAwesomeIcon>
							</p>
							<p className='member-position'>President, CEO</p>
						</article>
						<article>
							<img
								src={`${process.env.PUBLIC_URL}/img/member2.jpg`}
								alt='member2'
							/>
							<p className='member-name'>
								James
								<FontAwesomeIcon
									icon={faEnvelope}
									className='envelope'
								></FontAwesomeIcon>
							</p>
							<p className='member-position'>General Manager</p>
						</article>
						<article>
							<img
								src={`${process.env.PUBLIC_URL}/img/member3.jpg`}
								alt='member3'
							/>
							<p className='member-name'>
								Zoe
								<FontAwesomeIcon
									icon={faEnvelope}
									className='envelope'
								></FontAwesomeIcon>
							</p>
							<p className='member-position'>Assistant Manager</p>
						</article>
						<article>
							<img
								src={`${process.env.PUBLIC_URL}/img/member4.jpg`}
								alt='member4'
							/>
							<p className='member-name'>
								Sam
								<FontAwesomeIcon
									icon={faEnvelope}
									className='envelope'
								></FontAwesomeIcon>
							</p>
							<p className='member-position'>Senior Staff</p>
						</article>
					</section>
				</div>
			</section>
			<Store />
		</Layout>
	);
}

function Store() {
	/* 카카오맵 변수 선언 */
	const [Store, setStore] = useState([]);
	const [IndexExp, setIndexExp] = useState(0);
	const [Index, setIndex] = useState(0);
	const option = useRef(null);
	const info = useRef(null);
	const { kakao } = window;

	/* 매장 정보 */
	// info.current = [
	// 	{
	// 		title: 'LUSH Myeongdong Store',
	// 		location: '5, Myeongdong 8ga-gil, Jung-gu, Seoul',
	// 		latlng: new kakao.maps.LatLng(37.561652, 126.985299),
	// 		imgUrl: `${process.env.PUBLIC_URL}/img/marker1.png`,
	// 		imgSize: new kakao.maps.Size(90, 109),
	// 		imgPos: { offset: new kakao.maps.Point(45, 109) },
	// 	},
	// 	{
	// 		title: 'LUSH Gangnam Store',
	// 		location: '433, Gangnam-daero, Seocho-gu, Seoul',
	// 		latlng: new kakao.maps.LatLng(37.500998, 127.0256544),
	// 		imgUrl: `${process.env.PUBLIC_URL}/img/marker2.png`,
	// 		imgSize: new kakao.maps.Size(90, 109),
	// 		imgPos: { offset: new kakao.maps.Point(45, 109) },
	// 	},
	// 	{
	// 		title: 'LUSH SPA Gyeonglidan',
	// 		location: '10, Hoenamu-ro 42-gil, Yongsan-gu, Seoul',
	// 		latlng: new kakao.maps.LatLng(37.5406277, 126.9956342),
	// 		imgUrl: `${process.env.PUBLIC_URL}/img/marker3.png`,
	// 		imgSize: new kakao.maps.Size(90, 109),
	// 		imgPos: { offset: new kakao.maps.Point(45, 109) },
	// 	},
	// ];
	// option.current = {
	// 	center: info.current[Index].latlng,
	// 	level: 3,
	// };

	const getData = async () => {
		const result = await axios.get(pub + '/DB/content.json');
		setStore(result.data.store);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Layout name={'Store'}>
			<section className='experience'>
				<h2>Our Experience</h2>
				<div className='wrap'>
					<ul className='tabs'>
						{Store.map((el, idx) => {
							let isOn = '';
							IndexExp === idx && (isOn = 'on');
							return (
								<li
									key={`tab${idx}`}
									className={isOn}
									onClick={() => setIndexExp(idx)}
								>
									<h3>{el.title}</h3>
								</li>
							);
						})}
					</ul>

					<div className='tabBox'>
						{Store.map((el, idx) => {
							let isOn = '';
							IndexExp === idx && (isOn = 'on');
							return (
								<article key={`box${idx}`} className={isOn}>
									<div className='pic'>
										<img src={`${pub}/img/${el.image}`} alt={el.title} />
									</div>
									<div className='txt'>
										<h4>{el.title}</h4>
										<p>{el.content}</p>
										<span>
											{el.shop} <br />
											{el.time}
										</span>
										{/* <Link to='/' className='btnMore'>
											VIEW MORE
										</Link> */}
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</Layout>
	);
}
export default About;
