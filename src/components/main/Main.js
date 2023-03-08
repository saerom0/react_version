import Header from '../common/Header';
import Promo from './Promo';
import MiddleMenu from './MiddleMenu';
import Banner from './Banner';
import MainReview from './MainReview';
import Visual from './Visual';
import Videos from './Videos';
import Btns from './Btns';
import { useState } from 'react';

function Main({ menuOpen }) {
	const [scrolled, setScrolled] = useState(0);
	const [pos, setPos] = useState([]);

	return (
		<main>
			<Header type={'main'} menuOpen={menuOpen} />
			<Visual />
			<MiddleMenu scrolled={scrolled} currentPos={pos[1]} />
			<Banner />
			<MainReview />
			<Promo />
			<Videos />
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</main>
	);
}

export default Main;
