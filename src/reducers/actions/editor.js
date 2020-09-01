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

export const updateAssets = (value) => {
  return { type: 'UPDATE_ASSETS', value }
}