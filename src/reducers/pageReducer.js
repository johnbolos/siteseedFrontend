const initialState = {
	currentPage: 0,
	pages: [
		{
			name: "Home",
			components: [],
			style: [],
			homePage: true,
			styleFontStr: null,
			hidden: false,
			desp: null,
			favicon: null,
			seo: {
				name: null,
				desp: null
			}
		},
		{
			name: "Contact",
			components: [],
			style: [],
			homePage: false,
			styleFontStr: null,
			hidden: false,
			desp: null,
			favicon: null,
			seo: {
				name: null,
				desp: null
			}
		},
	],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_PAGE":
			return {
				...state,
				pages: [...state.pages, action.payload],
			};

		case "SAVE_CHANGES":
			let pageIndex = action.payload.pageIndex;
			let newPages = state.pages;
			// newState.currentPage = pageIndex;
			console.log(newPages, 'aaa.p diatch')
			newPages[pageIndex] = { ...state.pages[pageIndex], ...action.payload.pageObj };
			return {
				...state,
				pages: newPages
			};

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

		case "EDIT_PAGE":
			let pageNo = action.payload.pageIndex;
			let pages = state.pages;
			let pageInfo = { ...state.pages[pageNo], ...action.payload.change };
			pages[pageNo] = pageInfo
			return {
				...state,
				pages: pages
			};

		case "DELETE_PAGE":
			return {
				...state,
				pages: action.payload
			};

		case "SET_HOME":
			state.pages.map(a => a.homePage = false);
			state.pages[action.payload].homePage = true
			return {
				...state,
				pages: state.pages
			};

		case "RESET_PAGES":
			console.log(initialState, 'aaa.p reset')
			return {
				currentPage: 0,
				pages: [
					{
						name: "Home",
						components: [],
						style: [],
						homePage: true,
						styleFontStr: null,
						hidden: false,
						desp: null,
						favicon: null,
						seo: {
							name: null,
							desp: null
						}
					},
					{
						name: "Contact",
						components: [],
						style: [],
						homePage: false,
						styleFontStr: null,
						hidden: false,
						desp: null,
						favicon: null,
						seo: {
							name: null,
							desp: null
						}
					},
				],
			};
		default:
			return state;
	}
};
