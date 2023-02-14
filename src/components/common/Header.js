import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faHome,
	faSignInAlt,
	faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const pub = process.env.PUBLIC_URL;
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
							<NavLink to='/'>Log in</NavLink>
						</li>
						<li>
							<NavLink to='/Signup'>Sign up</NavLink>
						</li>
					</ul>

					<ul className='tablet-log'>
						<li>
							<NavLink to='/'>
								<FontAwesomeIcon icon={faSignInAlt} className='log-in' />
							</NavLink>
						</li>
						<li>
							<NavLink to='/Signup'>
								<FontAwesomeIcon icon={faUserPlus} className='sign-up' />
							</NavLink>
						</li>
					</ul>
				</div>

				<NavLink to='/' className='btn-call'>
					<span>메뉴호출</span>
				</NavLink>

				<div className='mob-menu'>
					<div className='mob-logo'>
						<NavLink to='/'>
							<img src={`${pub}/img/logo_white.png`} alt={'회사로고'} />
						</NavLink>
					</div>
					<nav className='side-menu'>
						<NavLink className='mob-h1' to='/'>
							{/* <img src='img/logo_black.png' alt='회사로고' /> */}
						</NavLink>

						<ul className='mob-log'>
							<li>
								<NavLink to='/'>Log in</NavLink>
							</li>
							<li>
								<NavLink to='/sign_up'>Sign up</NavLink>
							</li>
							<li>
								<NavLink to='/'>My Account</NavLink>
							</li>
						</ul>

						<ul id='mob_gnb'>
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
