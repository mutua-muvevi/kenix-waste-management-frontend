import axios from "axios";
import contactTypes from "./types";

export const sendMessageStart = () => ({
	type: contactTypes.START_SEND_MESSAGE,
});

export const sendMessageSuccess = (values) => ({
	type: contactTypes.SUCCESS_SEND_MESSAGE,
	payload: values,
});

export const sendMessageFail = (errMessage) => ({
	type: contactTypes.FAIL_SEND_MESSAGE,
	payload: errMessage,
});

export const sendMessage = (values) => {
	return async (dispatch) => {
		try {
			const res = axios.post(
				`https://Kenix Waste Management-baur.onrender.com/api/contact/send`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			dispatch(sendMessageStart())
			dispatch(sendMessageSuccess(res.data));
		} catch (error) {
			dispatch(sendMessageFail(error.response));
		}
	};
};
