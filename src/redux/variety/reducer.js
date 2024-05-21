
import { VarietyList } from 'src/content/variety';
import varietyTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	allVarieties: VarietyList,
	allVarietiesError: null,

	variety:null,
	varietyError: null,
};

const varietyReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case varietyTypes.START_SELECT_VARIETY:
			return { 
				...state,
				loading: true,
			};
		case varietyTypes.SUCCESS_SELECT_VARIETY:
			return {
				...state,
				loading: false,
				variety: payload
			};
		case varietyTypes.FAIL_SELECT_VARIETY:
			return {
				...state,
				loading: false,
				variety: null,
				varietyError: payload,
			};

		default:
			return state;
	}
};

export default varietyReducer;