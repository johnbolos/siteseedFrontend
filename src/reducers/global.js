const initialState = {
    currentUser: null,
    userS3Dir: null,
    assets: {
        image: [
            'http://grapesjs.com/img/work-desk.jpg',
            'https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg',
            'http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/about-us-img.jpg',
            'http://159.65.145.117:8090/SiteSeed/Spa&Wellnss/images/Banner.jpg',
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
            'Raleway',
            'Playfair Display',
            'Open Sans'
        ]
    },
    recentColors: [
        '#C70039',
        '#FF5733',
        '#FF8D1A',
        '#FFC300',
        '#EDDD53',
        '#ADD45C',
        '#57C785',
        '#00BAAD',
        '#2A7B9B',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
    ],
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
            
        case 'APPEND_COLOR':
            let recentColors = state.recentColors
            recentColors.pop()
            recentColors.unshift(action.value)
            return {
                ...state,
                recentColors: recentColors
            }

        case 'SET_S3_DIR':
            return {
                ...state,
                userS3Dir: action.value
            }

        case 'UPDATE_ASSETS':
            return {
                ...state,
                assets: action.value
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
