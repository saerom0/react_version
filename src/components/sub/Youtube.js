// // const key = 'AIzaSyCwLGRESuf8Zwcy3A9ufGkTyoUcRtYEu_Y';
// // const playlist = 'PLKfwPBQMIxKDP60C-MiQuif3-9MB7RTHm';

// import Layout from '../common/Layout';
// import axios from 'axios';
// import { useEffect, useState, useRef } from 'react';
// import Modal from '../common/Modal';
// import { setYoutube } from '../../redux/actionType';
// import { useDispatch, useSelector } from 'react-redux';

// function Youtube() {
// 	const dispatch = useDispatch();
// 	const Vids = useSelector((store) => store.youtubeReducer.youtube);
// 	const modal = useRef(null);
// 	const [Vids, setVids] = useState([]);
// 	const [Index, setIndex] = useState(0);

// 	useEffect(() => {
// 		const key = 'AIzaSyDq1ThuKd63CGMc178rIvnscNriIww6L4A';
// 		const playlist = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
// 		const num = 10;
// 		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

// 		axios.get(url).then((json) => {
// 			// setVids(json.data.items);
// 			setYoutube(json.data.items);
// 			dispatch(action);
// 		});
// 	}, []);

// 	return (
// 		<>
// 			<Layout name={'Youtube'}>
// 				{Vids.map((data, idx) => {
// 					const tit = data.snippet.title;
// 					const desc = data.snippet.description;
// 					const date = data.snippet.publishedAt;

// 					return (
// 						<article key={data.id}>
// 							<h3>{tit.length > 60 ? tit.substr(0, 60) + '...' : tit}</h3>

// 							<div className='txt'>
// 								<p>{desc.length > 100 ? desc.substr(0, 100) + '...' : desc}</p>
// 								<span>{date.split('T')[0]}</span>
// 							</div>

// 							<div
// 								className='pic'
// 								onClick={() => {
// 									setIndex(idx);
// 									modal.current.open();
// 								}}
// 							>
// 								<img
// 									src={data.snippet.thumbnails.high.url}
// 									alt={data.snippet.title}
// 								/>
// 							</div>
// 						</article>
// 					);
// 				})}
// 			</Layout>

// 			<Modal ref={modal}>
// 				<iframe
// 					title={Vids[0]?.id}
// 					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
// 				></iframe>
// 			</Modal>
// 		</>
// 	);
// }

// export default Youtube;
