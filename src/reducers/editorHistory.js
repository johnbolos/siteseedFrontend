const initialState = {
    styleObj: [],
    html: ''
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_STYLE_OBJECT':
            return {
                ...state,
                styleObj: action.value
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
