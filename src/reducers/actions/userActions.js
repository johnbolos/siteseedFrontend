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

// export default login