import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer id='footer'>
			<div className='container'>
				<section className='wrap1'>
					<Link to='/'>QUICK LINKS</Link>
					<ul>
						<li>
							<Link to='/'>Shared office</Link>
						</li>
						<li>
							<Link to='/'>Gallery</Link>
						</li>
						<li>
							<Link to='/'>Youtube</Link>
						</li>
						<li>
							<Link to='/'>Review</Link>
						</li>
						<li>
							<Link to='/'>Contact</Link>
						</li>
					</ul>
				</section>

				<section className='web-wrap2'>
					<h1 className='hidden'>REAL SUITE</h1>
					<img
						src={`${process.env.PUBLIC_URL}/img/logo_png`}
						alt={'회사로고'}
					/>
					<p>Copyright © 2023 REAL SUITE ALL Right reserved.</p>
				</section>
				<section className='mob-wrap2'>
					<h1>REAL SUITE</h1>
					<p>Copyright © 2023 REAL SUITE ALL Right reserved.</p>
				</section>

				<section className='wrap3'>
					<div>
						<FontAwesomeIcon icon={faTwitterSquare} />
						<FontAwesomeIcon icon={faInstagramSquare} />
						<FontAwesomeIcon icon={faFacebookSquare} />
						<FontAwesomeIcon icon={faYoutube} />
					</div>
					<address>
						Lorem ipsum dolor sit amet B/D consectetur adipisicing elit. Sint.
						<br />
						Tel : +82-2-2100-2114
					</address>
				</section>
			</div>
		</footer>
	);
}

export default Footer;
