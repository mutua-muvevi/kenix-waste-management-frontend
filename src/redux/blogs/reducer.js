import BlogList from 'src/content/blogs';
import blogTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	allBlogs: BlogList,
	allBlogsError: null,

	blog:null,
	blogError: null,
};

const blogReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case blogTypes.START_SELECT_BLOG:
			return { 
				...state,
				loading: true,
			};
		case blogTypes.SUCCESS_SELECT_BLOG:
			return {
				...state,
				loading: false,
				blog: payload
			};
		case blogTypes.FAIL_SELECT_BLOG:
			return {
				...state,
				loading: false,
				blog: null,
				blogError: payload,
			};

		default:
			return state;
	}
};

export default blogReducer;