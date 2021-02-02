import axios from 'axios'

// import { store } from './store'
import { apiUrl, assetsUrl, fontsUrl } from './settings.js'

const authAxios = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    }
})
// const assetAxios = axios.create({
//     baseURL: assetsUrl,
//     timeout: 10000,
//     // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
// })
const googleFontsAxios = axios.create({
    baseURL: fontsUrl,
    timeout: 10000,
    // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
})

const basicAxios = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})

class Request {

    test = () => {
        return new Promise((next) => {
            basicAxios.get('/test')
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ messageType: true, err })
                })
        })
    }
    // uploadImage = (data) => {
    //     return new Promise((next) => {
    //         assetAxios.post('/image/upload', data)
    //             .then(d => {
    //                 return next(d.data)
    //             })
    //             .catch(err => {
    //                 return next({ error: true, err })
    //             })
    //     })
    // }
    getGoogleFonts = () => {
        return new Promise((next) => {
            googleFontsAxios.get('')
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ error: true, err })
                })
        })
    }


    // ========================================Backend Routes========================================


    // =======================Auth===========================
    signup = (data) => {
        return new Promise((next) => {
            basicAxios.post('/signup/', data)
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else if (d.data.status == 400) {
                        return next({ messageType: 'error', ...d.data })
                    }
                    return next(d.data)
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    login = (data) => {
        return new Promise((next) => {
            basicAxios.post('/login/', data)
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    forgotPassword = (data) => {
        return new Promise((next) => {
            basicAxios.post('/forgot-password/', data)
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    resetPassword = (data) => {
        return new Promise((next) => {
            basicAxios.post('/reset-password/', data)
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }
    // =======================================================

    // =======================Dashboard===========================
    dashboard = () => {
        return new Promise((next) => {
            authAxios.get('/dashboard-api/')
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messagetype: 'error', err })
                })
        })
    }

    // ============================================================
    // ==============================================================================================

}

export default new Request
// export default {}