import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Menu = forwardRef((props, ref) => {
	const pub = process.env.PUBLIC_URL;
	const [Open, setOpen] = useState(false);
	const active = { color: 'orange' };

	useImperativeHandle(ref, () => {
		return { toggle: () => setOpen(!Open) };
	});

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 550) setOpen(false);
		});
	}, []);

	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='mobilePanel'
					initial={{ opacity: 0, x: -320 }}
					animate={{
						opacity: 1,
						x: 0,
						transition: { duration: 0.5 },
					}}
					exit={{
						opacity: 0,
						x: -320,
					}}
					onClick={() => setOpen(false)}
				>
					<h1>
						<Link to='/'>
							<img src={`${pub}/img/logo_black.png`} alt={'회사로고'} />
						</Link>
					</h1>

					<ul id='gnbMo'>
						<li>
							<NavLink to='/about' activeStyle={active}>
								About
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
						<li>
							<NavLink to='/signup' activeStyle={active}>
								Sign Up
							</NavLink>
						</li>
					</ul>

					<ul className='brands'>
						<li>
							<FontAwesomeIcon icon={faFacebookSquare} />
						</li>
						<li>
							<FontAwesomeIcon icon={faInstagramSquare} />
						</li>
						<li>
							<FontAwesomeIcon icon={faTwitterSquare} />
						</li>
						<li>
							<FontAwesomeIcon icon={faYoutube} />
						</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
