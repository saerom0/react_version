import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from '../common/Modal';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyCwLGRESuf8Zwcy3A9ufGkTyoUcRtYEu_Y';
		const playlist = 'PLKfwPBQMIxKDP60C-MiQuif3-9MB7RTHm';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((data, idx) => {
					const tit = data.snippet.title;
					const desc = data.snippet.description;
					const date = data.snippet.publishedAt;

					return (
						<div className='videoList'>
							<article key={data.id}>
								<div
									className='pic'
									onClick={() => {
										setOpen(true);
										setIndex(idx);
									}}
								>
									<img
										src={data.snippet.thumbnails.high.url}
										alt={data.snippet.title}
									/>
								</div>
								<div className='con'>
									<h2>{tit.length > 60 ? tit.substr(0, 60) + '...' : tit}</h2>
									<p>
										{desc.length > 100 ? desc.substr(0, 100) + '...' : desc}
									</p>
								</div>
							</article>
						</div>
					);
				})}
			</Layout>
			{Open && (
				<Modal setOpen={setOpen}>
					<iframe
						title={Vids[0].id}
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
					></iframe>
				</Modal>
			)}
		</>
	);
}

export default Youtube;
