import { faArrowRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function MiddleMenu() {
	return (
		<section id='middle_menu' className='scroll'>
			<div className='inner'>
				<ul className='sub-gnb'>
					<li>
						<span>OFFICES</span>
						<div className='sub-menu'>
							<ul>
								<li>
									<Link to='office.html'>KOREA</Link>
								</li>
								<li>
									<Link to='office.html'>AMERICA</Link>
								</li>
								<li>
									<Link to='office.html'>ENGLAND</Link>
								</li>
								<li>
									<Link to='office.html'>HONGKONG</Link>
								</li>
								<li>
									<Link to='office.html'>VIEW MORE</Link>
									<FontAwesomeIcon icon={faArrowRight} />
								</li>
							</ul>
						</div>
					</li>

					<li>
						<span>SERVICES</span>
						<div className='sub-menu'>
							<ul>
								<li>
									<Link to='office.html'>BUSINESS SUPPORT</Link>
								</li>
								<li>
									<Link to='office.html'>VIRTUAL OFFICE</Link>
								</li>
								<li className='isSub'>
									<Link to='office.html'>
										CO-WORKING SPACE
										<FontAwesomeIcon icon={faAngleRight} />
									</Link>

									<div className='sub-menu-2'>
										<ul>
											<li>
												<Link to='office.html'>MEETING ROOM</Link>
											</li>
											<li>
												<Link to='office.html'>CONFERENCE FACILITIES</Link>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>

					<li>
						<span>ENQUIRE</span>
					</li>
				</ul>
				<div className='intro'>
					<h2>WHO WE ARE</h2>
					<h3 className='page'>
						WORLD'S PREMIUM ONE-STOP SERVICED OFFICE PROVIDER,
						<br />
						RUN BY MULTI-CULTURAL INDUSTRY EXPERTS
					</h3>
					<div className='p-wrap'>
						<p className='left'>
							Located in some of the most prestigious buildings in the
							Asia-Pacific region, we offer an unparalleled range of services,
							from sourcing the right local business partners to legal
							accounting, payroll and IT.
						</p>
						<p className='right'>
							Our solutions are customized to our clients’ needs because every
							business is unique. REAL SUITE is more than just a service
							provider, but a reliable partner in your company’s journey to
							success.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MiddleMenu;
