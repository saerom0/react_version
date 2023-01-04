import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Office() {
	const [qna, setQna] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/qna.json`).then((json) => {
			setQna(json.data.qna);
		});
	}, []);

	return (
		<Layout name={'Office'}>
			<section>
				<div className='sub_bg'></div>
				<div className='container'>
					<h1>
						Shared Office <span>공유오피스란?</span>
					</h1>
					<div className='wrap'>
						<div className='contents'>
							<p>
								REAL SUITE는 단순히 오피스를 제공하는 것에 안주하지 않고, 고객의
								비즈니스 특성에 맞추어 고객의 사업성장을 함께 지원하는 믿음직한
								파트너 입니다.
							</p>

							{qna.map((data, idx) => {
								return (
									<article key={data.no}>
										<div className='tab'>
											<input type='checkbox' id={data.no} />
											<label>
												<h2>{data.no}</h2>
												<h3>{data.title}</h3>
											</label>
											<div className='information'>
												<p>{data.contents}</p>
											</div>
										</div>
									</article>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Office;
