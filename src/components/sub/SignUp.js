import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function SignUp() {
	const history = useHistory();
	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
		gender: null,
		interests: null,
		comments: '',
		edu: '',
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;

		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		if (
			value.pwd1.length < 5 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 다섯글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요';
		}
		if (!value.pwd2 || value.pwd1 !== value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
		}
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일은 8글자 이상입력, @를 포함하세요.';
		}
		if (!value.gender) {
			errs.gender = '성별을 선택하세요';
		}
		//interests항목이 false면 에러객체 추가
		if (!value.interests) {
			errs.interests = '관심사를 하나이상 선택하세요.';
		}
		if (value.comments.length < 20) {
			errs.comments = '남기는 말은 20글자 이상 입력하세요';
		}
		if (value.edu === '') {
			errs.edu = '최종 학력을 선택하세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	//radio 이벤트 함수
	const handleRadio = (e) => {
		const { name } = e.target;
		const isChecked = e.target.checked;
		setVal({ ...Val, [name]: isChecked });
	};

	//checkbox 이벤트 함수
	const handleCheck = (e) => {
		//초기값을 false로 지정
		let isChecked = false;
		const { name } = e.target;
		//체크박스를 기준으로 다시 부모요소에서 모든 input요소(체크박스)를 찾음
		const inputs = e.target.parentElement.querySelectorAll('input');

		//체크박스를 반복을 돌면서 하나라도 체크된게 있으면 true값으로 변경후 리턴
		inputs.forEach((el) => {
			if (el.checked) isChecked = true;
		});
		setVal({ ...Val, [name]: isChecked });
	};

	//select선택 이벤트 함수
	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.value;
		setVal({ ...Val, [name]: isSelected });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
		setSubmit(true);
	};

	//인풋요소 초기화 함수
	const handleReset = () => {
		setSubmit(false);
		setErr({});
		setVal(initVal);
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('회원가입이 완료되었습니다.');
			history.push('/');
		}
	}, [Err, Submit, history]);

	return (
		<Layout name={'Members'}>
			<form action='' onSubmit={handleSubmit}>
				<fieldset>
					<legend className='h'>회원가입 폼 양식</legend>
					<table border='1'>
						<tbody>
							{/* user id */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										name='userid'
										id='userid'
										placeholder='아이디를 입력하세요'
										//인풋요소의 기본기능으로 입력내용을 출력하는것이 아닌
										//Val스테이트의 userid키값에 있는 내용만 화면에 출력
										value={Val.userid}
										onChange={handleChange}
									/>
									<span className='err'>{Err.userid}</span>
								</td>
							</tr>

							{/* password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										placeholder='비밀번호를 입력하세요'
										value={Val.pwd1}
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd1}</span>
								</td>
							</tr>

							{/* re password */}
							<tr>
								<th scrope='row'>
									<label htmlFor='pwd2'>RE PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										placeholder='비밀번호를 재입력하세요'
										value={Val.pwd2}
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd2}</span>
								</td>
							</tr>

							{/* email */}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-MAIL</label>
								</th>
								<td>
									<input
										type='text'
										name='email'
										id='email'
										placeholder='이메일 주소를 입력하세요'
										value={Val.email}
										onChange={handleChange}
									/>
									<span className='err'>{Err.email}</span>
								</td>
							</tr>

							{/* gender */}
							<tr>
								<th scope='row'>GENDER</th>
								<td>
									<label htmlFor='male'>Male</label>
									<input
										type='radio'
										name='gender'
										id='male'
										onChange={handleRadio}
									/>

									<label htmlFor='female'>FeMale</label>
									<input
										type='radio'
										name='gender'
										id='female'
										onChange={handleRadio}
									/>
									<span className='err'>{Err.gender}</span>
								</td>
							</tr>

							{/* interests */}
							<tr>
								<th scope='row'>INTERESTS</th>
								<td>
									<label htmlFor='sports'>SPORTS</label>
									<input
										type='checkbox'
										name='interests'
										id='sports'
										onChange={handleCheck}
									/>

									<label htmlFor='music'>MUSIC</label>
									<input
										type='checkbox'
										name='interests'
										id='music'
										onChange={handleCheck}
									/>

									<label htmlFor='game'>GAME</label>
									<input
										type='checkbox'
										name='interests'
										id='game'
										onChange={handleCheck}
									/>

									<span className='err'>{Err.interests}</span>
								</td>
							</tr>

							{/* edu */}
							<tr>
								<th scope='row'>
									<label htmlFor='edu'>EDUCATION</label>
								</th>
								<td>
									<select name='edu' id='edu' onChange={handleSelect}>
										<option value=''>학력을 선택하세요</option>
										<option value='elementary school'>초등학교 졸업</option>
										<option value='middle school'>중학교 졸업</option>
										<option value='high school'>고등학교 졸업</option>
										<option value='college'>대학교 졸업</option>
									</select>
									<span className='err'>{Err.edu}</span>
								</td>
							</tr>

							{/* comments */}
							<tr>
								<th scope='row'>
									<label htmlFor='comments'>COMMENTS</label>
								</th>
								<td>
									<textarea
										name='comments'
										id='comments'
										cols='30'
										rows='5'
										value={Val.comments}
										onChange={handleChange}
										placeholder='남기는 말을 입력하세요.'
									></textarea>
									<span className='err'>{Err.comments}</span>
								</td>
							</tr>

							{/* button set */}
							<tr>
								<th colSpan='2'>
									<input type='reset' value='cancel' onClick={handleReset} />
									<input type='submit' value='send' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default SignUp;
