import NewsList from 'src/content/news';
import newsTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	allNews: NewsList,
	allNewsError: null,

	news:null,
	newsError: null,
};

const newsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case newsTypes.START_SELECT_NEWS:
			return { 
				...state,
				loading: true,
			};
		case newsTypes.SUCCESS_SELECT_NEWS:
			return {
				...state,
				loading: false,
				news: payload
			};
		case newsTypes.FAIL_SELECT_NEWS:
			return {
				...state,
				loading: false,
				news: null,
				newsError: payload,
			};

		default:
			return state;
	}
};

export default newsReducer;