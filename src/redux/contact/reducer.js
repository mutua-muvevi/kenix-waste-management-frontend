
import contactTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	sendMessage:null,
	sendMessageError: null,
};

const contactReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case contactTypes.START_SEND_MESSAGE:
			return { 
				...state,
				loading: true,
				sendMessageError: null
			};
		case contactTypes.SUCCESS_SEND_MESSAGE:
			return {
				...state,
				loading: false,
				sendMessage: payload,
				sendMessageError: null
			};
		case contactTypes.FAIL_SEND_MESSAGE:
			return {
				...state,
				loading: false,
				sendMessage: null,
				sendMessageError: payload,
			};

		default:
			return state;
	}
};

export default contactReducer;