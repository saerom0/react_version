import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';

function SignUp() {
	const history = useHistory();
	const initVal = {
		type: null,
		userid: '',
		pwd1: '',
		pwd2: '',
		member: '',
		gender: null,
		number: null,
		email: '',
	};
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [submit, setSubmit] = useState(false);
	const [star_icon] = useState(
		<FontAwesomeIcon icon={faStarOfLife} className='star-icon' />
	);

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;

		if (!value.type) {
			errs.type = '회원유형을 선택하세요';
		}
		if (value.userid.length < 6) {
			errs.userid = '아이디 설정 조건을 확인하세요';
		}
		if (
			value.pwd1.length < 6 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 = '비밀번호 설정 조건을 확인하세요';
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
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(e.target);
		console.log({ [name]: value });
		setVal({ ...val, [name]: value });
	};

	//radio 이벤트 함수
	const handleRadio = (e) => {
		const { name } = e.target;
		const isChecked = e.target.checked;
		setVal({ ...val, [name]: isChecked });
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
		setVal({ ...val, [name]: isChecked });
	};

	//select선택 이벤트 함수
	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.value;
		setVal({ ...val, [name]: isSelected });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
		setSubmit(true);
		window.scroll(0, 0);
	};

	//인풋요소 초기화 함수
	const handleReset = () => {
		setSubmit(false);
		setErr({});
		setVal(initVal);
	};

	useEffect(() => {
		const len = Object.keys(err).length;
		if (len === 0 && submit) {
			alert('회원가입이 완료되었습니다.');
			history.push('/');
		}
	}, [err, submit, history]);

	return (
		<Layout name={'Sign-up'}>
			<h1>SIGN UP</h1>
			<div className='container'>
				<form action='' onSubmit={handleSubmit}>
					<fieldset>
						<legend className='hidden'>회원가입 양식</legend>
						<div className='all-agree'>
							<input type='checkbox' name='all_agree' id='all_agree' />
							<label htmlFor='agree'>
								이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
								동의합니다.
							</label>
						</div>
						<div className='must'>
							<h2>
								<label htmlFor='terms'>[필수] 개인정보 수집 및 이용 동의</label>
							</h2>
							<textarea
								name='terms'
								id='terms'
								cols='30'
								rows='10'
								spellCheck='false'
								readOnly
								value={`제1조(목적) 이 약관은 회사(전자상거래 사업자)가 운영하는 사이버 몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다. 「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」 제2조(정의) ①"몰" 이란 회사가 재화 또는 용역(이하 "재화등"이라 함)을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다. ②"이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③'회원'이라 함은 "몰" 에 개인정보를 제공하여 회원등록을 한 자로서, "몰" 의 정보를 지속적으로 제공받으며, "몰" 이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. ④ '비회원' 이라 함은 회원에 가입하지 않고 "몰" 이 제공하는 서비스를 이용하는 자를 말합니다. 제3조 (약관등의 명시와 설명 및 개정) ① "몰" 은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호·모사전송번호·전자우편주소, 사업자등록번호, 통신판매업신고번호, 개인정보관리책임자등을 이용자가 쉽게 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다. ②"몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회·배송책임·환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다. ③ "몰"은 전자상거래등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에 관한 법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.`}
							></textarea>
							<div className='agree'>
								<label htmlFor='must-agree'>이용약관에 동의합니다.</label>
								<input
									type='checkbox'
									name='all-agree'
									id='must-agree'
									required
								/>
							</div>
						</div>
						<div className='choice'>
							<h2>
								<label htmlFor='terms'>[선택] 마켓팅정보 수신 동의</label>
							</h2>
							<textarea
								name='terms'
								id='terms'
								cols='30'
								rows='10'
								spellCheck='false'
								readOnly
								value={
									'개인정보 수집 및 마켓팅정보 수신 동의 1. 항목 : 아이디, 비밀번호, 성명, 생년월일, 성별, 이메일, 휴대폰, 자택주소 2. 기타 항목 : 결제카드사, 은행계좌번호 등 결제정보, 만14세미만 아동의 법정대리인정보, 서비스 이용기록, 상담 녹취, 결제기록, 접속 로그, 쿠키, 접속 IP정보, 접속브라우저정보 선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.'
								}
							></textarea>
							<div className='agree'>
								<label htmlFor='choice-agree'>
									제3자 정보제공 및 마케팅 수신에 동의합니다.
								</label>
								<input type='checkbox' name='all-agree' id='choice_agree' />
							</div>
						</div>
						<h2>회원가입 작성 정보</h2>
						<table>
							<tbody>
								{/* MEMBER TYPE */}
								<tr>
									<th scope='row'>MEMBER TYPE{star_icon}</th>
									<td>
										<input
											type='radio'
											name='type'
											id='개인'
											onChange={handleRadio}
										/>
										<label htmlFor='개인'>개인회원</label>

										<input
											type='radio'
											name='type'
											id='기업'
											onChange={handleRadio}
										/>
										<label htmlFor='기업'>기업회원</label>
										<p className='err'>{err.type}</p>
									</td>
								</tr>

								{/* user id */}
								<tr>
									<th scope='row'>
										<label htmlFor='userid'>USER ID</label>
										{star_icon}
									</th>
									<td>
										<input
											type='text'
											name='userid'
											id='userid'
											//인풋요소의 기본기능으로 입력내용을 출력하는것이 아닌
											//Val스테이트의 userid키값에 있는 내용만 화면에 출력
											value={val.userid}
											onChange={handleChange}
										/>
										<span>(영문 6~16자)</span>
										<p className='err'>{err.userid}</p>
									</td>
								</tr>

								{/* password */}
								<tr>
									<th scope='row'>
										<label htmlFor='pwd1'>PASSWORD</label>
										{star_icon}
									</th>
									<td>
										<input
											type='password'
											name='pwd1'
											id='pwd1'
											value={val.pwd1}
											onChange={handleChange}
										/>
										<span>
											(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~12자)
										</span>
										<p className='err'>{err.pwd1}</p>
									</td>
								</tr>

								{/* re password */}
								<tr>
									<th scrope='row'>
										<label htmlFor='pwd2'>RE-ENTER PASSWORD</label>
										{star_icon}
									</th>
									<td>
										<input
											type='password'
											name='pwd2'
											id='pwd2'
											value={val.pwd2}
											onChange={handleChange}
										/>
										<p className='err'>{err.pwd2}</p>
									</td>
								</tr>

								{/* NAME */}
								<tr>
									<th scope='row'>
										<label htmlFor='name'>YOUR NAME</label>
									</th>
									<td>
										<input
											type='text'
											name='name'
											id='name'
											value={val.name}
											onChange={handleChange}
										/>
										<span className='err'>{err.name}</span>
									</td>
								</tr>

								{/* gender */}
								<tr>
									<th scope='row'>GENDER{star_icon}</th>
									<td>
										<input
											type='radio'
											name='gender'
											id='male'
											onChange={handleRadio}
										/>
										<label htmlFor='male'>Male</label>

										<input
											type='radio'
											name='gender'
											id='female'
											onChange={handleRadio}
										/>
										<label htmlFor='female'>Female</label>
										<p className='err'>{err.gender}</p>
									</td>
								</tr>

								{/* PHONE NUMBER */}
								<tr>
									<th scope='row'>
										<label htmlFor='phone'>PHONE NUMBER</label>
									</th>
									<td>
										<select
											name='select-num'
											id='phone'
											onChange={handleSelect}
										>
											<option value='010'>010</option>
											<option value='011'>011</option>
											<option value='017'>017</option>
											<option value='019'>019</option>
										</select>
										<input type='text' name='phone'></input>
										<span>010 제외한 숫자만 입력 해 주세요.</span>
										<p className='err'>{err.phone}</p>
									</td>
								</tr>

								{/* email */}
								<tr>
									<th scope='row'>
										<label htmlFor='email'>E-MAIL</label>
										{star_icon}
									</th>
									<td>
										<input
											type='text'
											name='email'
											id='email'
											placeholder='이메일 주소 전체 입력'
											value={val.email}
											onChange={handleChange}
										/>
										<p className='err'>{err.email}</p>
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
			</div>
		</Layout>
	);
}

export default SignUp;
