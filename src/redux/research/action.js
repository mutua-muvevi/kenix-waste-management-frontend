import researchTypes from "./types";

export const selectBlogStart = () => ({
	type: researchTypes.START_SELECT_BLOG
})

export const selectBlogSuccess = (research) => ({
	type: researchTypes.SUCCESS_SELECT_BLOG,
	payload: research,
})

export const selectBlogFail = (errMessage) => ({
	type: researchTypes.FAIL_SELECT_BLOG,
	payload: errMessage,
});


export const selectBlog = (research) => {
	return async (dispatch) => {
		try {
			dispatch(selectBlogSuccess(research))
		} catch (error) {
			dispatch(selectBlogFail(error))
		}
	}
}