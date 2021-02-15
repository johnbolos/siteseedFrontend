import axios from 'axios'

// import { store } from './store'
import { apiUrl, assetsUrl, fontsUrl } from './settings.js'
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


let getToken = () => {
    return ({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        }
    })
}

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
    logout = () => {
        return new Promise((next) => {
            basicAxios.get('/logout/', getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
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
            basicAxios.get('/dashboard-api/', getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }
    createNewSite = (data) => {
        return new Promise((next) => {
            basicAxios.post('/create-site/', data, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    // ============================================================

    // =======================Profile===========================
    getProfile = () => {
        return new Promise((next) => {
            basicAxios.get('/user-profile/', getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    setProfile = (data) => {
        return new Promise((next) => {
            basicAxios.post('/user-profile/', data, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    getNotifSettings = () => {
        return new Promise((next) => {
            basicAxios.get('/user-notification-settings/', getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    setNotifSettings = (data) => {
        return new Promise((next) => {
            basicAxios.post('/user-notification-settings/', data, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }
    updatePassword = (data) => {
        return new Promise((next) => {
            basicAxios.post('/change-password/', data, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }
    // =========================================================

    // =======================Site Settigns===========================
    getGeneralSettings = (data) => {
        return new Promise((next) => {
            basicAxios.post('/general-settings/', data, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    setGeneralSettings = (data) => {
        return new Promise((next) => {
            basicAxios.post('/general-settings/', data, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    getFormSettings = (site_id) => {
        return new Promise((next) => {
            basicAxios.get(`/form-settings/site_id/${site_id}/`, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    setFormSettings = (data) => {
        return new Promise((next) => {
            basicAxios.post('/form-settings/', data, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    getFontSettings = (site_id) => {
        return new Promise((next) => {
            basicAxios.get(`/fonts-settings/site_id/${site_id}/`, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }

    setFontSettings = (data) => {
        return new Promise((next) => {
            basicAxios.post('/fonts-settings/', data, getToken())
                .then(d => {
                    if (d.data.status == 200) {
                        return next({ messageType: 'success', ...d.data })
                    } else {
                        return next({ messageType: 'error', ...d.data })
                    }
                })
                .catch(err => {
                    return next({ messageType: 'error', err })
                })
        })
    }
    // =========================================================
    // ==============================================================================================

}

export default new Request
// export default {}