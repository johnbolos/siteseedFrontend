// import Request from '../../request'
import { showLoader, hideLoader } from './index'

// const login = data => {
//   return dispatch => {
//     dispatch(showLoader())

//     Request.login(data)
//       .then((data) => {
//         dispatch(hideLoader())
//       })
//   }

// }

export const setS3Dir = (value) => {
  // const{ assetsTarget, type } = options
  return { type: 'SET_S3_DIR', value }
}

export const updateAssets = (value) => {
  return { type: 'UPDATE_ASSETS', value }
}

export const setLocalFonts = (value) => {
  return { type: 'SET_LOCAL_FONTS', value }
}

export const setUser = (data) => {
  return { type: 'SET_CURRENT_USER', user: data }
}

export const setCurrentBuilderSiteId = (data) => {
  return { type: 'SET_CURRENT_BUILDER_SITE_ID', value: data }
}

export const setCurrentBuilderTemplateId = (data) => {
  return { type: 'SET_CURRENT_BUILDER_TEMPLATE_ID', value: data }
}

export const setCurrentBuilderTemplateData = (data) => {
  return { type: 'SET_CURRENT_BUILDER_TEMPLATE_DATA', value: data }
}

export const setTokenInfo = (data) => {
  return { type: 'SET_AUTH_TOKEN', tokenInfo: data }
}

export const setGeneralData = (data) => {
  return { type: 'SET_GENERAL_DATA', generalData: data }
}

export const setProfileData = (data) => {
  return { type: 'SET_PROFILE_DATA', profileData: data }
}

export const setOTP = (value) => {
  return { type: 'SET_OTP', value }
}

export const setNewSiteDetails = (value = {}) => {
  return { type: 'SET_NEW_SITE_DETAILS', value }
}

// export default login