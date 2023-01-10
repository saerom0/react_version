import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faHome,
	faSignInAlt,
	faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	return (
		<header className={props.type}>
			<div className='container'>
				<div className='web_menu'>
					<h1 className='web_h1'>
						<NavLink exact to='/'>
							<FontAwesomeIcon icon={faHome} />
							Home
						</NavLink>
					</h1>

					<h1 className='mob-h1'>
						<NavLink to='/'></NavLink>
					</h1>

					<nav>
						<ul id='gnb'>
							<li>
								<NavLink to='/office'>Shared Office</NavLink>
							</li>
							<li>
								<NavLink to='/gallery'>Gallery</NavLink>
							</li>
							<li>
								<NavLink to='/youtube'>Youtube</NavLink>
							</li>
							<li>
								<NavLink to='/review'>Review</NavLink>
							</li>
							<li>
								<NavLink to='/contact'>Contact</NavLink>
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

					<ul className='tablet-log'>
						<li>
							<NavLink to='/signup'>
								<FontAwesomeIcon icon={faSignInAlt} />
							</NavLink>
						</li>
						<li>
							<NavLink to='/signup'>
								<FontAwesomeIcon icon={faUserPlus} />
							</NavLink>
						</li>
					</ul>
				</div>

				<FontAwesomeIcon
					icon={faBars}
					onClick={() => props.menuOpen.current.toggle()}
				/>
			</div>
		</header>
	);
}

export default Header;
