import axios from "axios";
import emailTypes from "./types";

export const postEmailStart = () => ({
	type: emailTypes.START_POST_EMAIL,
});

export const postEmailSuccess = (values) => ({
	type: emailTypes.SUCCESS_POST_EMAIL,
	payload: values,
});

export const postEmailFail = (errMessage) => ({
	type: emailTypes.FAIL_POST_EMAIL,
	payload: errMessage,
});

export const postEmail = (values) => {
	return async (dispatch) => {
		try {
			const res = axios.post(
				`https://Kenix Waste Management-baur.onrender.com/api/email/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			postEmailStart()
			dispatch(postEmailSuccess(res.data));
		} catch (error) {
			dispatch(postEmailFail(error.response));
		}
	};
};
