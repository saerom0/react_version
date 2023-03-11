import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MainReview() {
	const getLocalData = () => {
		const dummyPosts = [
			{
				title: 'You know what?',
				content: 'This data is managed globally using the redux-toolkit.',
			},
			{
				title: 'It is a long established fact.',
				content:
					'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.',
			},
			{
				title: 'Awesome!',
				content: "I'm looking forward to the future.",
			},
			{
				title: 'Contrary to popular belief.',
				content:
					'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form',
			},
			{
				title: 'Lorem Ipsum is simply dummy text.',
				content:
					' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			},
			{
				title: 'The standard chunk of Lorem Ipsum used',
				content:
					"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
			},
		];

		const data = localStorage.getItem('post');

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const data = useRef(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(data.current));
	}, []);

	const icon_star = <FontAwesomeIcon className='star' icon={faStar} />;
	const url = process.env.PUBLIC_URL;

	return (
		<section id='mainReview' className='myScroll'>
			<div className='container'>
				<h1>CUSTOMER REVIEW</h1>
				<section className='wrap'>
					{data.current.map((data, idx) => {
						if (idx >= 4) return null;
						return (
							<article key={idx}>
								<div className='frame'>
									<div className='pic'>
										<img
											src={`${url}/img/offer${idx + 1}.jpg`}
											alt={data.title}
										/>
										<div className='stars'>
											{icon_star}
											{icon_star}
											{icon_star}
											{icon_star}
											{icon_star}
										</div>
									</div>
									<Link to='/review' className='btn-review'>
										VIEW MORE
									</Link>
								</div>

								<h2>
									<Link to='/'>{data.title}</Link>
								</h2>
								<p>
									{data.content.length > 100
										? data.content.substr(0, 100) + '...'
										: data.content}
								</p>
							</article>
						);
					})}
				</section>
			</div>
		</section>
	);
}

export default MainReview;
