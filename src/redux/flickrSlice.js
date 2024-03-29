import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlickr = createAsyncThunk(
	'flickr/requestFlickr',
	async (opt) => {
		const baseURL =
			'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
		const key = '1f6a8afb62dde6c9a4d9073dd46560aa';
		const methodInterest = 'flickr.interestingness.getList';
		const methodSearch = 'flickr.photos.search';
		const methodUser = 'flickr.people.getPhotos';
		const num = 30;
		let url = '';
		if (opt.type === 'interest')
			url = `${baseURL}&method=${methodInterest}&api_key=${key}&per_page=${num}`;
		if (opt.type === 'search')
			url = `${baseURL}&method=${methodSearch}&api_key=${key}&per_page=${num}&tags=${opt.tags}`;
		if (opt.type === 'user')
			url = `${baseURL}&method=${methodUser}&api_key=${key}&per_page=${num}&user_id=${opt.user}`;

		const response = await axios.get(url);
		return response.data.photos.photo;
	}
);

const flickrSlice = createSlice({
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFlickr.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchFlickr.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default flickrSlice.reducer;
