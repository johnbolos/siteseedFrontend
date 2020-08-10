export const createPage = (name, components, style) => (dispatch) => {
	dispatch({
		type: "CREATE_PAGE",
		payload: { name, components, style },
	});
};

export const saveChanges = (pageIndex, pageObj) => (dispatch) => {
	dispatch({
		type: "SAVE_CHANGES",
		payload: { pageIndex, pageObj },
	});
};

export const changePage = (currentPageIndex, newPageIndex) => (dispatch) => {
	return dispatch({
		type: "CHANGE_PAGE",
		payload: { currentPageIndex, newPageIndex },
	});
};
