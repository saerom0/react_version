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
				<div className='web-menu'>
					<h1 className='web-h1'>
						<NavLink exact to='/'>
							<FontAwesomeIcon icon={faHome} className='home' />
							Home
						</NavLink>
					</h1>

					<h1 className='mob-h1'>
						<NavLink to='/'></NavLink>
					</h1>

					<nav>
						<ul id='gnb'>
							<li>
								<NavLink to='/about'>About</NavLink>
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
							<NavLink to='/signup'>Log in</NavLink>
						</li>
						<li>
							<NavLink to='/signup'>Sign up</NavLink>
						</li>
					</ul>

					<ul className='tablet-log'>
						<li>
							<NavLink to='/signup'>
								<FontAwesomeIcon icon={faSignInAlt} className='log-in' />
							</NavLink>
						</li>
						<li>
							<NavLink to='/signup'>
								<FontAwesomeIcon icon={faUserPlus} className='sign-up' />
							</NavLink>
						</li>
					</ul>
				</div>

				<FontAwesomeIcon
					icon={faBars}
					className='fa-bars'
					onClick={() => props.menuOpen.current.toggle()}
				/>
			</div>
		</header>
	);
}

export default Header;
