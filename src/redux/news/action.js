import newsTypes from "./types";

export const selectNewsStart = () => ({
	type: newsTypes.START_SELECT_NEWS
})

export const selectNewsSuccess = (news) => ({
	type: newsTypes.SUCCESS_SELECT_NEWS,
	payload: news,
})

export const selectNewsFail = (errMessage) => ({
	type: newsTypes.FAIL_SELECT_NEWS,
	payload: errMessage,
});


export const selectNews = (news) => {
	return async (dispatch) => {
		try {
			dispatch(selectNewsSuccess(news))
		} catch (error) {
			dispatch(selectNewsFail(error))
		}
	}
}