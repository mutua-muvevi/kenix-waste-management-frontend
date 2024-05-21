
import emailTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	postEmail:null,
	postEmailError: null,
};

const emailReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case emailTypes.START_POST_EMAIL:
			return { 
				...state,
				loading: true,
				postEmailError: null
			};
		case emailTypes.SUCCESS_POST_EMAIL:
			return {
				...state,
				loading: false,
				postEmail: payload,
				postEmailError: null
			};
		case emailTypes.FAIL_POST_EMAIL:
			return {
				...state,
				loading: false,
				postEmail: null,
				postEmailError: payload,
			};

		default:
			return state;
	}
};

export default emailReducer;