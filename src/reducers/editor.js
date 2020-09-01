const initialState = {
  pseudoClass: 'active',
  assetsManager: false,
  assets: {
    image: [
      'https://grapesjs.com/img/work-desk.jpg',
      'https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg',
      'https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/78985/joker-2019-movie-iphone-x-wallpaper-ilikewallpaper_com_200.jpg',
      'https://grapesjs.com/img/work-desk.jpg',
      'https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg',
      'https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/78985/joker-2019-movie-iphone-x-wallpaper-ilikewallpaper_com_200.jpg',
      'https://grapesjs.com/img/work-desk.jpg',
      'https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg',
      'https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/78985/joker-2019-movie-iphone-x-wallpaper-ilikewallpaper_com_200.jpg',
      'https://grapesjs.com/img/work-desk.jpg',
      'https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg',
      'https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/78985/joker-2019-movie-iphone-x-wallpaper-ilikewallpaper_com_200.jpg',
    ],
    fonts: ['']
  },
  imageAssetsTarget: null,
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
      return resp

    case 'CLOSE_ASSETS':
      return {
        ...state,
        assetsManager: false,
        imageAssetsTarget: null
      }

    case 'UPDATE_ASSETS':
      return {
        ...state,
        assets: action.value
      }

    default:
      return state
  }
}
