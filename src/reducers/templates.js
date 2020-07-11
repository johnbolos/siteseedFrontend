const initialState = {
  templateName: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TEMPLATE":
      //console.log("action recieved")
      return {
        ...state,
        templateName: action.payload,
      }
    default:
      return state
  }
}
