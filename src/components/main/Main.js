import Header from '../common/Header';
import Promo from './Promo';
import MiddleMenu from './MiddleMenu';
import Banner from './Banner';
import Offer from './Offer';
import Visual from './Visual';
import Track from './Track';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<MiddleMenu />
			<Banner />
			<Offer />
			<Promo />
			<Track />
		</main>
	);
}

export default Main;
