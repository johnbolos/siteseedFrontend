const initialState = {
    styleObj: null,
    html: '',
    style: '',
    status: ''
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_STYLE_OBJECT':
            return {
                ...state,
                styleObj: JSON.stringify(action.value),
                status: action.status || 'style'
            }

        case 'SET_STYLE_DATA':
            return {
                ...state,
                style: action.value,
                status: action.status || 'style'
            }

        case 'SET_HTML_DATA':
            return {
                ...state,
                html: action.value
            }

        case 'SET_HISTORY_STATUS':
            return {
                ...state,
                status: action.value
            }


        default:
            return state
    }
}
