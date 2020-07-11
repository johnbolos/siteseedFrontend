const initialState = {
    currentUser: {
        email: null
    },
    token: null,
    buttonLoading: false,
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.user
            }

        case 'LOGOUT':
            return {
                ...state,
                currentUser: {}
            }

        case 'SHOW_LOADING':
            return {
                ...state,
                loading: true
            }

        case 'HIDE_LOADING':
            return {
                ...state,
                loading: false
            }
            
        case 'SHOW_BTN_LOADING':
            return {
                ...state,
                buttonLoading: true
            }

        case 'HIDE_BTN_LOADING':
            return {
                ...state,
                buttonLoading: false
            }


        case 'SET_AUTH_TOKEN':
            return {
                ...state,
                token: action.token
            }

        default:
            return state
    }
}
