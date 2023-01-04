import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import Layout from '../common/Layout';

function Review() {
	const input = useRef(null);
	const textarea = useRef(null);
	const [Posts, setPosts] = useState([]);

	//폼 초기화 함수
	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	//글 저장 함수
	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			return alert('제목과 본문을 모두 입력하세요');
		}
		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...Posts,
		]);
		resetForm();
	};

	//글 삭제 함수
	const deletePost = (index) => {
		setPosts(Posts.filter((_, idx) => idx !== index));
	};

	//글 수정모드 변경함수
	const enableUpdate = (index) => {
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/dummyPosts.json`).then((json) => {
			setPosts(json.data.posts);
		});
	}, []);

	useEffect(() => {
		console.log(Posts);
	}, [Posts]);

	return (
		<Layout name={'Review'}>
			<div className='inputBox'>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />
				<textarea
					cols='30'
					rows='4'
					placeholder='본문을 입력하세요'
					ref={textarea}
				></textarea>
				<br />
				<div className='btnSet'>
					<button onClick={resetForm}>CANCEL</button>
					<button onClick={createPost}>WRITE</button>
				</div>
			</div>

			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								//수정 모드
								<>
									<div className='txt'>
										<h2>
											<input type='text' defaultValue={post.title} />
											<br />
											<textarea
												cols='30'
												rows='3'
												defaultValue={post.content}
											></textarea>
											<br />
										</h2>
									</div>

									<div className='btnSet'>
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
										<button onClick={() => deletePost(idx)}>DELETE</button>
									</div>
								</>
							) : (
								//출력 모드
								<>
									<div className='txt'>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>

									<div className='btnSet'>
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
										<button onClick={() => deletePost(idx)}>DELETE</button>
									</div>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Review;
