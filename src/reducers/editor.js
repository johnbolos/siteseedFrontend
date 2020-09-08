const initialState = {
  pseudoClass: 'normal',
  assetsManager: false,
  assets: {
    image: [
      'http://grapesjs.com/img/work-desk.jpg',
      'https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg',
      'https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/78985/joker-2019-movie-iphone-x-wallpaper-ilikewallpaper_com_200.jpg',
    ],
    fonts: [
      'Abel',
      'Allerta',
      'Amarnth',
      'Amatic SC',
      'Anton',
      'Arimo',
      'Arvo',
      'Asap',
      'Bitter',
      'Black Ops One',
      'Bree Serif',
      'Cabin',
      'Cabin Condensed',
      'Calligraffitti',
      'Cantarell',
      'Cardo',
      'Changa One',
    ]
  },
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

    case 'UPDATE_ASSETS':
      return {
        ...state,
        assets: action.value
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
