import { Route, Switch } from 'react-router-dom';
//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MobMenu from './components/common/MobMenu';
//main
import Main from './components/main/Main';
//sub
import Review from './components/sub/Review';
import Office from './components/sub/Office';
import Gallery from './components/sub/Gallery';
import Contact from './components/sub/Contact';
import SignUp from './components/sub/SignUp';
import Youtube from './components/sub/Youtube';
import './scss/style.scss';

import { fetchYoutube } from './redux/youtubeSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

function App() {
	const dispatch = useDispatch();
	const menuOpen = useRef(null);

	useEffect(() => {
		dispatch(fetchYoutube());
	}, [dispatch]);
	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/office' component={Office} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/review' component={Review} />
			<Route path='/contact' component={Contact} />
			<Route path='/signup' component={SignUp} />
			<Footer />
		</>
	);
}

export default App;
