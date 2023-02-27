/* 모바일 메뉴 관리용 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	open: false,
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,

	reducers: {
		//팝업 오픈
		open: (state) => {
			state.open = true;
		},
		//팝업 닫기
		close: (state) => {
			state.open = false;
		},
		//팝업 토글
		toggle: (state) => {
			state.open = !state.open;
		},
	},
});

export const { toggle, open, close } = menuSlice.actions;

export default menuSlice.reducer;
