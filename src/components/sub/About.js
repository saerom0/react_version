import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function About() {
	const [qna, setQna] = useState([]);

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
										<p>
											<i className='far fa-check-circle'></i>Business
											corporations and multinationals
										</p>
										<p>
											<i className='far fa-check-circle'></i>Representative
											office and SMEs
										</p>
										<p>
											<i className='far fa-check-circle'></i>Flexible project
											space
										</p>
										<p>
											<i className='far fa-check-circle'></i>Short-term swing
											space
										</p>
										<p>
											<i className='far fa-check-circle'></i>Risk-free new
											market entry
										</p>
										<p>KRW 800,000 /PER MONTH</p>
									</article>

									<article>
										<h3>IDEAL FOR</h3>
										<p>
											<i className='far fa-check-circle'></i>Individuals and
											freelancers
										</p>
										<p>
											<i className='far fa-check-circle'></i>Business networking
										</p>
										<p>
											<i className='far fa-check-circle'></i>Innovative
											start-ups
										</p>
										<p>
											<i className='far fa-check-circle'></i>Vibrant community
											event space
										</p>
										<p>COWORKING DAY PASS : KRW 50,000 /PER DAY</p>
										<p>DEDICATED WORKSTATION : KRW 650,000 /PER MONTH</p>
									</article>

									<article>
										<h3>IDEAL FOR</h3>
										<p>
											<i className='far fa-check-circle'></i>Entrepreneurs
											working from home
										</p>
										<p>
											<i className='far fa-check-circle'></i>Start-ups with a
											limited budget
										</p>
										<p>
											<i className='far fa-check-circle'></i>SMEs with a
											regional presence
										</p>
										<p>
											<i className='far fa-check-circle'></i>Company
											registration address
										</p>
										<p>KRW 95,000 /PER MONTH</p>
									</article>

									<article>
										<h3>IDEAL FOR</h3>
										<p>
											<i className='far fa-check-circle'></i>Business meetings
										</p>
										<p>
											<i className='far fa-check-circle'></i>Corporate trainings
										</p>
										<p>
											<i className='far fa-check-circle'></i>Business travellers
										</p>
										<p>
											<i className='far fa-check-circle'></i>Home office users
										</p>
										<p>
											<i className='far fa-check-circle'></i>Training venue
										</p>
										<p>MEETING ROOMS : KRW 60,000 /PER HOUR</p>
										<p>VIDEO CONFERENCING : KRW 250,000 /PER HOUR</p>
									</article>

									<article>
										<p>
											<i className='far fa-check-circle'></i>Business Concierge
										</p>
										<p>
											<i className='far fa-check-circle'></i>Accounting & Tax
											consultation
										</p>
										<p>
											<i className='far fa-check-circle'></i>Web design and
											hosting
										</p>
										<p>
											<i className='far fa-check-circle'></i>New market entry
											support
										</p>
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
		</Layout>
	);
}

export default About;
