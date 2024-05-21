import researchTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	research:null,
	researchError: null,
};

const researchReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case researchTypes.START_SELECT_BLOG:
			return { 
				...state,
				loading: true,
			};
		case researchTypes.SUCCESS_SELECT_BLOG:
			return {
				...state,
				loading: false,
				research: payload
			};
		case researchTypes.FAIL_SELECT_BLOG:
			return {
				...state,
				loading: false,
				research: null,
				researchError: payload,
			};

		default:
			return state;
	}
};

export default researchReducer;