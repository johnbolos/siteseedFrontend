export const selectTemplate = templateName => dispatch => {
  console.log("action dispatched", templateName)
  dispatch({
    type: "CHANGE_TEMPLATE",
    payload: templateName,
  })
}
