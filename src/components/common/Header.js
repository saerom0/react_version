import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header(props) {
	const active = { color: 'aqua' };
	return (
		<header className={props.type}>
			<div className='container'>
				<h1 className='web_h1'>
					<NavLink exact to='/' activeStyle={active}>
						REAL STATE
					</NavLink>
				</h1>
				<nav className='web_menu'>
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
				</nav>
				<ul className='log'>
					<li>
						<NavLink to='/signup'>Log In</NavLink>
					</li>
					<li>
						<NavLink to='/signup'>Sign Up</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
