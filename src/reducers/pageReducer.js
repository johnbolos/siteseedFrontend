const initialState = {
	currentPage: 0,
	pages: [
		{ name: "home", components: [], style: [] },
		{ name: "contact", components: [], style: [] },
	],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_PAGE":
			console.log("action recieved", state);
			return {
				...state,
				pages: [...state.pages, action.payload],
			};

		case "SAVE_CHANGES":
			console.log("changes saved in redux");
			let pageIndex = action.payload.pageIndex;
			let newState = state;
			newState.currentPage = pageIndex;
			newState.pages[pageIndex] = { ...action.payload.pageObj };
			return newState;

		case "CHANGE_PAGE":
			return {
				...state,
				currentPage: action.payload.newPageIndex,
			};
		case "EDIT_PAGE_TITLE":
			let index = action.payload.pageIndex;
			let stateCopy = state;
			//newState.currentPage = pageIndex;
			stateCopy.pages[index].name = action.payload.pageName;
			return stateCopy;
		default:
			return state;
	}
};
