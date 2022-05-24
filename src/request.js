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
    timeout: 100000,
    // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
})

const basicAxios = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})

const basicAxiosHighTimeout = axios.create({
    baseURL: apiUrl,
    // timeout: 10000,
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

    test = (jsonLoc) => {
        return new Promise((next) => {
            const axiosObj = axios.create({
                // baseURL: 'http://localhost:3000',
                timeout: 10000,
                headers: { 'Content-Type': 'application/json' }
            })

            axiosObj.get(jsonLoc)
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
    updateExportCredits = (data) => {
        return new Promise((next) => {
            basicAxios.post('/save-export/', data, getToken())
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
    deleteSite = (data) => {
        return new Promise((next) => {
            basicAxios.post('/delete-site/', data, getToken())
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
    inviteContributor = (data) => {
        return new Promise((next) => {
            basicAxios.post('/site-contributors/', data, getToken())
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

    getBillingInfo = () => {
        return new Promise((next) => {
            basicAxios.get('/billing-information/', getToken())
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
    addBillingCard = (data) => {
        return new Promise((next) => {
            basicAxios.post('/add-card/', data, getToken())
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
    updateBillingCard = (data) => {
        return new Promise((next) => {
            basicAxios.post('/update-card/', data, getToken())
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
    deleteBillingCard = (data) => {
        return new Promise((next) => {
            basicAxios.delete('/update-card/', { data, ...getToken() })
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
    getSubscriptionInfo = () => {
        return new Promise((next) => {
            basicAxios.get('/user-subscription/', getToken())
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
    updateSubscriptionPlan = (data) => {
        return new Promise((next) => {
            basicAxios.post('/change-plan/', data, getToken())
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
    siteSearch = (data) => {
        return new Promise((next) => {
            basicAxios.post('/search/', data, getToken())
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
    getDomainsInfo = () => {
        return new Promise((next) => {
            basicAxios.get('/user-domains/', getToken())
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
    removeDomain = (data) => {
        return new Promise((next) => {
            basicAxios.post('/remove-domain/', data, getToken())
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
    assignDomainToSite = (data) => {
        return new Promise((next) => {
            basicAxios.post('/assign-domain/', data, getToken())
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
    unassignDomainToSite = (data) => {
        return new Promise((next) => {
            basicAxios.post('/unassign-domain/', data, getToken())
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

    // =======================Buy- Domains===========================
    getDomainsList = (data) => {
        return new Promise((next) => {
            basicAxiosHighTimeout.post('/search-domain/', data, getToken())
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
    purchaseDomain = (data) => {
        return new Promise((next) => {
            basicAxiosHighTimeout.post('/purchase-domain/', data, getToken())
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

    editCollabRole = (data) => {
        return new Promise((next) => {
            basicAxios.put('/site-contributors/', data, getToken())
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

    removeCollab = (data) => {
        return new Promise((next) => {
            basicAxios.delete('/site-contributors/', { data, ...getToken() })
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
    // =======================Buy Templates + Checkout===========================
    getTemplates = () => {
        return new Promise((next) => {
            basicAxios.get(`/ss-templates/`, getToken())
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
    checkPromoCode = (data) => {
        return new Promise((next) => {
            basicAxios.post('/check-promo-code/', data, getToken())
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
    purchaseTemplate = (data) => {
        return new Promise((next) => {
            basicAxios.post('/purchase-template/', data, getToken())
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
    linkTemplateToSite = (data) => {
        return new Promise((next) => {
            basicAxios.post('/save-template-to-site/', data, getToken())
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

    // =======================Builder===========================
    setSiteContentFilePath = (data) => {
        return new Promise((next) => {
            basicAxios.post('/save-site-path/', data, getToken())
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
    builderContentJSON = (jsonLoc) => {
        return new Promise((next) => {
            const axiosObj = axios.create({
                timeout: 10000,
                headers: { 'Content-Type': 'application/json' }
            })

            axiosObj.get(jsonLoc)
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ messageType: true, err })
                })
        })
    }
    uploadToHosting = (data) => {
        return new Promise((next) => {
            basicAxios.post('/save-files/', data, getToken())
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
    
    // =======================Beta Test api's===========================
    generateCode = (data) => {
        return new Promise((next) => {
            basicAxios.post('/beta-code/', data, getToken())
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
    // =================================================================
    // ==============================================================================================

    roadmap = () => {
        return new Promise((next) => {
            basicAxios.get('/roadmap/')
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ messageType: true, err })
                })
        })
    }

    roadmapCards = () => {
        return new Promise((next) => {
            basicAxios.get('/roadmapCards/')
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ messageType: true, err })
                })
        })
    }
}

export default new Request
// export default {}