import domainTypes from "./types";

export const selectDomainStart = () => ({
	type: domainTypes.START_SELECT_DOMAIN
})

export const selectDomainSuccess = (domain) => ({
	type: domainTypes.SUCCESS_SELECT_DOMAIN,
	payload: domain,
})

export const selectDomainFail = (errMessage) => ({
	type: domainTypes.FAIL_SELECT_DOMAIN,
	payload: errMessage,
});


export const selectDomain = (domain) => {
	return async (dispatch) => {
		try {
			dispatch(selectDomainSuccess(domain))
		} catch (error) {
			dispatch(selectDomainFail(error))
		}
	}
}