const initialState = {
    styleObj: [],
    html: '',
    style: ''
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_STYLE_OBJECT':
            return {
                ...state,
                styleObj: action.value
            }

        case 'SET_STYLE_DATA':
            return {
                ...state,
                style: action.value
            }

        case 'SET_HTML_DATA':
            return {
                ...state,
                html: action.value
            }

        default:
            return state
    }
}
