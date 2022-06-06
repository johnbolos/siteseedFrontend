export const showLoader = () => {
  return { type: 'SHOW_LOADER' }
}

export const hideLoader = () => {
  return { type: 'HIDE_LOADER' }
}

export const setTheme = (value) => {
  return { type: 'SET_THEME', value }
}

export default {}