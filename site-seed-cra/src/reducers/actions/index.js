export * from './userActions'

export const showLoader = () => {
  return { type: 'SHOW_LOADING' }
}

export const hideLoader = () => {
  return { type: 'HIDE_LOADING' }
}

export default {}