import { useState } from 'react';

function MiddleMenu() {
	const [menu, setMenu] = useState(['OFFICES', 'SERVICES', 'GALLERY']);
	return (
		<section id='middle_menu' className='myScroll'>
			<div className='inner'>
				<ul className='sub_gnb'>
					{menu.map((el, idx) => {
						return (
							<li>
								<span>{el}</span>
							</li>
						);
					})}
				</ul>

				<div class='intro'>
					<h2>WHO WE ARE</h2>
					<h3>
						WORLD'S PREMIUM ONE-STOP SERVICED OFFICE PROVIDER,
						<br />
						RUN BY MULTI-CULTURAL INDUSTRY EXPERTS
					</h3>
					<div class='p_wrap'>
						<p class='left'>
							Located in some of the most prestigious buildings in the
							Asia-Pacific region, we offer an unparalleled range of services,
							from sourcing the right local business partners to legal
							accounting, payroll and IT.
						</p>
						<p class='right'>
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
