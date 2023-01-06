import { useEffect, forwardRef, useState, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//1-해당 자식 컴포넌트를 부모 컴포넌트로 전달하기위해서 해당 컴포넌트 함수를 forwardRef의 인수로 전달
const Modal = forwardRef((props, ref) => {
	//2-자기 자신을 열고 닫을 state와 변경함수를 내부에 생성
	const [Open, setOpen] = useState(false);

	//4-useImperativeHandle로 부모로 전달할 커스텀 객체를 생성
	//해당 객체 안에는 setOpen함수를 전달
	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	useEffect(() => {
		Open
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto');
	}, [Open]);

	return (
		//3- 자신이 가지고 잇는 Open state값에 따라 팝업요소 생성/제거 처리
		<AnimatePresence>
			{Open && (
				<motion.aside
					className='modal'
					initial={{ opacity: 0, scale: 0, rotate: 45 }}
					animate={{
						opacity: 1,
						scale: 1,
						rotate: 0,
						transition: { duration: 1 },
					}}
					exit={{
						opacity: 0,
						x: '50%',
						transition: { duration: 0.5, delay: 0.5 },
					}}
				>
					<div className='con'>{props.children}</div>
					<span className='close' onClick={() => setOpen(false)}>
						close
					</span>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Modal;
