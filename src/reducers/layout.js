const initialState = {
  collapsed: true,
  layout: 'sidemenu', // nav menu position: sidemenu or topmenu
  fixedHeader: false, // sticky header
  theme: 'dark'
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'TOGGLE_SIDEBAR_COLLAPSED':
      return {
        ...state,
        collapsed: !state.collapsed
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
