export const selectTemplate = templateName => dispatch => {
  dispatch({
    type: "CHANGE_TEMPLATE",
    payload: templateName,
  })
}
