import varietyTypes from "./types";

export const selectVarietyStart = () => ({
	type: varietyTypes.START_SELECT_VARIETY
})

export const selectVarietySuccess = (variety) => ({
	type: varietyTypes.SUCCESS_SELECT_VARIETY,
	payload: variety,
})

export const selectVarietyFail = (errMessage) => ({
	type: varietyTypes.FAIL_SELECT_VARIETY,
	payload: errMessage,
});


export const selectVariety = (variety) => {
	return async (dispatch) => {
		try {
			dispatch(selectVarietySuccess(variety))
		} catch (error) {
			dispatch(selectVarietyFail(error))
		}
	}
}