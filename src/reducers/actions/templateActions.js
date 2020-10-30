export const selectTemplate = templateName => dispatch => {
  dispatch({
    type: "CHANGE_TEMPLATE",
    payload: templateName,
  })
}

export const setCustomCss = value => dispatch => {
  dispatch({
    type: "SET_CUSTOM_CSS",
    payload: value,
  })
}
