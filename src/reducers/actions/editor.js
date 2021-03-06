export const setPseudoClass = (value) => {
  return { type: 'SET_PSEUDO_CLASS', value }
}

export const openAssets = (options) => {
  // const{ assetsTarget, type } = options
  return { type: 'OPEN_ASSETS', options }
}

export const closeAssets = () => {
  return { type: 'CLOSE_ASSETS' }
}

export const setbackgroundImage = (value) => {
  return { type: 'SET_BACKGROUND_IMAGE', value }
}

export const setGoogleFonts = (value) => {
  return { type: 'SET_GOOGLE_FONTS', value }
}

export const appendColor = (value) => {
  return { type: 'APPEND_COLOR', value }
}