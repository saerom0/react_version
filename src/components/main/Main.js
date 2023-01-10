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
			<MiddleMenu className={'scroll'} />
			<Banner />
			<Offer />
			<Promo className={'scroll'} />
			<Track className={'scroll'} />
		</main>
	);
}

export default Main;
