const initialState = {
  pseudoClass: 'active',
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

    default:
      return state
  }
}
