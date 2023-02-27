import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faSignInAlt,
	faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const pub = process.env.PUBLIC_URL;
	return (
		<>
			<header className={props.type}>
				<div className='container'>
					<h1>
						<NavLink exact to='/'>
							LOGO
						</NavLink>
					</h1>
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
						<li>
							<NavLink to='/members'>Membership</NavLink>
						</li>
					</ul>
					<NavLink
						to='/'
						className='btn-call'
						onClick={() => props.menuOpen.current.toggle()}
					>
						<span>메뉴호출</span>
					</NavLink>
				</div>
			</header>
		</>
	);
}

export default Header;
