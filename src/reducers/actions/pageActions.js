import _grapesEditor from "../../components/utils/grapesEditor/index";
export const createPage = (name, components, style, details) => (dispatch) => {
	dispatch({
		type: "CREATE_PAGE",
		payload: { name, components, style, ...details },
	});
};

export const saveChanges = (pageIndex, pageObj) => (dispatch) => {
	_grapesEditor.pages[pageIndex] = { ...pageObj }
	dispatch({
		type: "SAVE_CHANGES",
		payload: { pageIndex, pageObj },
	});
};
export const editPageSetting = (pageIndex, pageName) => (dispatch) => {
	dispatch({
		type: "EDIT_PAGE_TITLE",
		payload: { pageIndex, pageName },
	});
};

export const editPage = (pageIndex, change) => (dispatch) => {
	dispatch({
		type: "EDIT_PAGE",
		payload: { pageIndex, change },
	});
};

export const changePage = (currentPageIndex, newPageIndex) => (dispatch) => {
	return dispatch({
		type: "CHANGE_PAGE",
		payload: { currentPageIndex, newPageIndex },
	});
};
