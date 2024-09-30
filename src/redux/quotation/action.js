import axios from "axios";
import quotationTypes from "./types";

export const postQuotationStart = () => ({
	type: quotationTypes.START_POST_QUOTATION,
});

export const postQuotationSuccess = (values) => ({
	type: quotationTypes.SUCCESS_POST_QUOTATION,
	payload: values,
});

export const postQuotationFail = (errMessage) => ({
	type: quotationTypes.FAIL_POST_QUOTATION,
	payload: errMessage,
});

export const postQuotation = (values) => {
	return async (dispatch) => {
		try {
			const res = axios.post(
				`https://kenix-waste-solutions-server.onrender.com/api/quotation/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			dispatch(postQuotationStart())
			dispatch(postQuotationSuccess(res.data));

			return res;
		} catch (error) {
			dispatch(postQuotationFail(error.response));

			return error.response;
		}
	};
};
