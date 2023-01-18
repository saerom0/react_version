import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Office() {
	const [qna, setQna] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/qna.json`).then((json) => {
			setQna(json.data.qna);
		});
	}, []);

	return (
		<Layout name={'Office'}>
			<section>
				<h1>Shared Office</h1>
				<div className='container'>
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
										Also known as managed offices, business centers and
										executive suites, serviced offices provide fully-equipped
										facilities managed by a service facility management company.
										They empower businesses, from start-ups to small-,
										medium-sized enterprises and large-scale companies to rent
										office spaces that are suitable and customizable to their
										needs. Naturally, a serviced office room can cater to as few
										as one individual and as many as 20 persons.
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
										environment, and delivers results through the web, telephone
										and other technologies. Virtual offices operate without any
										actual physical office space; all operations (whether
										internal or external business processes and communication)
										are performed via the Internet and phone lines. Employee(s)
										work remotely and perform daily office tasks with the use of
										software and application tools dependent on the Internet.
										Most virtual offices offer a business address for postal
										communication and secretarial support.
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
										In a nutshell, the term refers to a space that provides
										fully equipped and fully furnished workstations that are
										ready for use and perfect for entrepreneurs and freelancers
										who choose not to work from home, and/or branch office/s.
										Co-working spaces are offered at a much lower price than
										traditional working spaces and offer more flexibility with
										daily, weekly and monthly access. Facilities such as mail
										handling, telephone, internet and admin support can all be
										made available.
									</p>
								</div>
							</div>

							<div className='tab'>
								<input type='checkbox' name='info' id='info4' />
								<label htmlFor='info4'>
									<h3>04</h3>
									<h4>
										What are the differences between office space and a
										dedicated workstation?
									</h4>
								</label>
								<div className='information'>
									<p>
										Co-working space is available by the day, week and month
										during office hours. A co-working client has access to
										either an unassigned work desk or workspace in a common area
										such as a business lounge with high-speed internet access. A
										dedicated workstation offers greater exclusivity, with 24/7
										access to their own assigned workspace.
									</p>
								</div>
							</div>

							<div className='tab'>
								<input type='checkbox' name='info' id='info5' />
								<label htmlFor='info5'>
									<h3>05</h3>
									<h4>
										Are serviced offices better value than traditional office
										space?
									</h4>
								</label>
								<div className='information'>
									<p>
										This really depends on several varying factors, such as
										location, building facilities and the included amenities. On
										its own, traditional office space may be less expensive than
										serviced offices but you’d only be getting an empty space.
										Additional expenses with traditional office space usually
										include overheads such as building dues, electricity, office
										space set-up, IT set-up, office furniture, telephone lines
										and office space interiors. Serviced office spaces are
										offered at a higher price because they already include all
										of these costs. Most importantly, serviced office spaces buy
										you more time for your business so you can focus on the more
										important matters and keep your business running smoothly.
									</p>
								</div>
							</div>
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

export default Office;
