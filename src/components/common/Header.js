import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
function Header(props) {
	const active = { color: '#333' };
	return (
		<header className={props.type}>
			<div className='container'>
				<div className='web_menu'>
					<h1 className='web_h1'>
						<NavLink exact to='/' activeStyle={active}>
							<FontAwesomeIcon icon={faHome} />
							Home
						</NavLink>
					</h1>
					<ul id='gnb'>
						<li>
							<NavLink to='/office' activeStyle={active}>
								Shared Office
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' activeStyle={active}>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeStyle={active}>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink to='/review' activeStyle={active}>
								Review
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' activeStyle={active}>
								Contact
							</NavLink>
						</li>
					</ul>
					<ul className='log'>
						<li>
							<NavLink to='/signup'>Log In</NavLink>
						</li>
						<li>
							<NavLink to='/signup'>Sign Up</NavLink>
						</li>
					</ul>
				</div>

				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
