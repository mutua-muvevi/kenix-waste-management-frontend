import serviceTypes from "./types";

export const selectServiceStart = () => ({
	type: serviceTypes.START_SELECT_SERVICE
})

export const selectServiceSuccess = (service) => ({
	type: serviceTypes.SUCCESS_SELECT_SERVICE,
	payload: service,
})

export const selectServiceFail = (errMessage) => ({
	type: serviceTypes.FAIL_SELECT_SERVICE,
	payload: errMessage,
});


export const selectService = (service) => {
	return async (dispatch) => {
		try {
			dispatch(selectServiceSuccess(service))
		} catch (error) {
			dispatch(selectServiceFail(error))
		}
	}
}