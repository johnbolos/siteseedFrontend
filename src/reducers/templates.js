const initialState = {
	templateName: "template1",
	customCss: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_TEMPLATE":
			return {
				...state,
				templateName: action.payload,
			};
		case "SET_CUSTOM_CSS":
			return {
				...state,
				customCss: action.payload,
			};
		default:
			return state;
	}
};
