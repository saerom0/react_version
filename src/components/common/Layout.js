import { useEffect, useRef } from 'react';

function Layout(props) {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<div className='container'>{props.children}</div>
		</section>
	);
}

export default Layout;
