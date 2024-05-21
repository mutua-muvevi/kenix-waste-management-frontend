import DomainList from 'src/content/domain';
import domainTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	domain:null,
	domainError: null,

	allDomains: DomainList,
	allDomainError: null
};

const domainReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case domainTypes.START_SELECT_DOMAIN:
			return { 
				...state,
				loading: true,
			};
		case domainTypes.SUCCESS_SELECT_DOMAIN:
			return {
				...state,
				loading: false,
				domain: payload
			};
		case domainTypes.FAIL_SELECT_DOMAIN:
			return {
				...state,
				loading: false,
				domain: null,
				domainError: payload,
			};

		default:
			return state;
	}
};

export default domainReducer;