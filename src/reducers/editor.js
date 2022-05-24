const initialState = {
  pseudoClass: 'normal',
  assetsManager: false,
  googleFonts: [],
  imageAssetsTarget: null,
  backgroundImage: null,
  theme: 'dark'
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SET_PSEUDO_CLASS':
      return {
        ...state,
        pseudoClass: action.value
      }

    case 'SET_THEME':
      return {
        ...state,
        theme: action.value
      }

    case 'OPEN_ASSETS':
      const resp = {
        ...state,
        assetsManager: action.options.type,
      }
      if (action.options.imageAssetsTarget) {
        resp.imageAssetsTarget = action.options.imageAssetsTarget
      }
      if (action.options.backgroundImage) {
        resp.backgroundImage = action.options.backgroundImage
      }
      return resp

    case 'CLOSE_ASSETS':
      return {
        ...state,
        assetsManager: false,
        imageAssetsTarget: null,
        backgroundImage: null,
      }

    case 'SET_BACKGROUND_IMAGE':
      return {
        ...state,
        backgroundImage: action.value
      }

    case 'SET_GOOGLE_FONTS':
      return {
        ...state,
        googleFonts: action.value
      }

    default:
      return state
  }
}
