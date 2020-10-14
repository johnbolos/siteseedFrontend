export const showLoader = () => {
  return { type: 'SHOW_LOADING' }
}

export const hideLoader = () => {
  return { type: 'HIDE_LOADING' }
}

export const setTheme = (value) => {
  return { type: 'SET_THEME', value }
}

export default {}