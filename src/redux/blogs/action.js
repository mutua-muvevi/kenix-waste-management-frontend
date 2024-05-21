import blogTypes from "./types";

export const selectBlogStart = () => ({
	type: blogTypes.START_SELECT_BLOG
})

export const selectBlogSuccess = (blog) => ({
	type: blogTypes.SUCCESS_SELECT_BLOG,
	payload: blog,
})

export const selectBlogFail = (errMessage) => ({
	type: blogTypes.FAIL_SELECT_BLOG,
	payload: errMessage,
});


export const selectBlog = (blog) => {
	return async (dispatch) => {
		try {
			dispatch(selectBlogSuccess(blog))
		} catch (error) {
			dispatch(selectBlogFail(error))
		}
	}
}