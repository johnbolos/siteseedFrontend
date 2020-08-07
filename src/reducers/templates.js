const initialState = {
	templateName: "template1",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_TEMPLATE":
			return {
				...state,
				templateName: action.payload,
			};
		default:
			return state;
	}
};
