import { faArrowRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function MiddleMenu({ scrolled, currentPos }) {
	return (
		<section id='middleMenu' className='myScroll'>
			<div className='container'>
				<ul className='subGnb'>
					<li>
						<span>OFFICES</span>
						<div className='subMenu'>
							<ul>
								<li>
									<Link to='/about'>KOREA</Link>
								</li>
								<li>
									<Link to='/about'>AMERICA</Link>
								</li>
								<li>
									<Link to='/about'>ENGLAND</Link>
								</li>
								<li>
									<Link to='/about'>HONGKONG</Link>
								</li>
								<li>
									<Link to='/about'>VIEW MORE</Link>
									<FontAwesomeIcon icon={faArrowRight} />
								</li>
							</ul>
						</div>
					</li>

					<li>
						<span>SERVICES</span>
						<div className='subMenu'>
							<ul>
								<li>
									<Link to='/about'>BUSINESS SUPPORT</Link>
								</li>
								<li>
									<Link to='/about'>VIRTUAL OFFICE</Link>
								</li>
								<li className='isSub'>
									<Link to='/gallery'>
										CO-WORKING SPACE
										<FontAwesomeIcon icon={faAngleRight} />
									</Link>

									<div className='subMenu2'>
										<ul>
											<li>
												<Link to='/gallery'>MEETING ROOM</Link>
											</li>
											<li>
												<Link to='/gallery'>CONFERENCE FACILITIES</Link>
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
					<h2>
						<span>W</span>
						<span>H</span>
						<span>O</span>
						<span>&nbsp;</span>
						<span>W</span>
						<span>E</span>
						<span>&nbsp;</span>
						<span>A</span>
						<span>R</span>
						<span>E</span>
					</h2>
					<h3
						className='page'
						style={{ transform: `translateX(${scrolled - currentPos}px)` }}
					>
						WORLD'S PREMIUM ONE-STOP SERVICED OFFICE PROVIDER,
						<br />
						RUN BY MULTI-CULTURAL INDUSTRY EXPERTS
					</h3>
					<div className='pWrap'>
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
