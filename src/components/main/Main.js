import Header from '../common/Header';
import Promo from './Promo';
import MiddleMenu from './MiddleMenu';
import Banner from './Banner';
import Offer from './Offer';
import Visual from './Visual';
import Track from './Track';
import Btns from './Btns';
import { useState } from 'react';

function Main({ menuOpen }) {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);
	return (
		<main>
			<Header type={'main'} menuOpen={menuOpen} />
			<Visual />
			<MiddleMenu Scrolled={Scrolled} currentPos={Pos[1]} />
			<Banner />
			<Offer />
			<Promo />
			<Track setScrolled={setScrolled} setPos={setPos} />
			<Btns />
		</main>
	);
}

export default Main;
