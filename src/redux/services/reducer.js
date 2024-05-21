import ServiceList from 'src/content/services';
import serviceTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	service:null,
	serviceError: null,

	allServices: ServiceList,
	allServiceError: null
};

const serviceReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case serviceTypes.START_SELECT_SERVICE:
			return { 
				...state,
				loading: true,
			};
		case serviceTypes.SUCCESS_SELECT_SERVICE:
			return {
				...state,
				loading: false,
				service: payload
			};
		case serviceTypes.FAIL_SELECT_SERVICE:
			return {
				...state,
				loading: false,
				service: null,
				serviceError: payload,
			};

		default:
			return state;
	}
};

export default serviceReducer;