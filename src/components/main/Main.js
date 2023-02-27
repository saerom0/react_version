import Header from '../common/Header';
import Promo from './Promo';
import MiddleMenu from './MiddleMenu';
import Banner from './Banner';
import Offer from './Offer';
import Visual from './Visual';
import Track from './Track';
import Btns from './Btns';
import { useState, useEffect } from 'react';

function Main({ menuOpen }) {
	const [scrolled, setScrolled] = useState(0);
	const [pos, setPos] = useState([]);
	// console.log(Scrolled);
	// console.log(Pos);

	useEffect(() => {
		console.log(scrolled);
	}, [scrolled]);
	return (
		<main>
			<Header type={'main'} menuOpen={menuOpen} />
			<Visual />
			<MiddleMenu scrolled={scrolled} currentPos={pos[1]} />
			<Banner />
			<Offer />
			<Promo />
			<Track scrolled={scrolled} />
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</main>
	);
}

export default Main;
