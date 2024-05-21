
import quotationTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	postQuotation:null,
	postQuotationError: null,
};

const quotationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case quotationTypes.START_POST_QUOTATION:
			return { 
				...state,
				loading: true,
				postQuotationError: null
			};
		case quotationTypes.SUCCESS_POST_QUOTATION:
			return {
				...state,
				loading: false,
				postQuotation: payload,
				postQuotationError: null
			};
		case quotationTypes.FAIL_POST_QUOTATION:
			return {
				...state,
				loading: false,
				postQuotation: null,
				postQuotationError: payload,
			};

		default:
			return state;
	}
};

export default quotationReducer;