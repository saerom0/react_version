import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//비동기 서버통신으로 데이터를 전달 받고 첫번째 인수로 넣은 문자값으로 내부 액션타입을 자동 생성해 액션객체 생성
export const fetchYoutube = createAsyncThunk(
	'youtube/requestYoutube',
	async () => {
		const key = 'AIzaSyCwLGRESuf8Zwcy3A9ufGkTyoUcRtYEu_Y';
		const playlist = 'PLKfwPBQMIxKDP60C-MiQuif3-9MB7RTHm';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		const response = await axios.get(url);
		return response.data.items;
	}
);

//fetchYoutube가 리턴하는 액션객체의 상태값에 따라 store에 전달할 리듀서 데이터값을 반환
const youtubeSlice = createSlice({
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchYoutube.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchYoutube.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchYoutube.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default youtubeSlice.reducer;
