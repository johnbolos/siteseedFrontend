import axios from 'axios'

import { apiUrl, assetsUrl, fontsUrl } from './settings.js'

const authAxios = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
})
const assetAxios = axios.create({
    baseURL: assetsUrl,
    timeout: 10000,
    // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
})
const googleFontsAxios = axios.create({
    baseURL: fontsUrl,
    timeout: 10000,
    // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
})

const basicAxios = axios.create({
    baseURL: apiUrl,
    timeout: 10000
})

class Request {

    test = () => {
        return new Promise((next) => {
            basicAxios.get('/test')
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ error: true, err })
                })
        })
    }
    uploadImage = (data) => {
        return new Promise((next) => {
            assetAxios.post('/image/upload', data)
                .then(d => {
                    return next(d.data)
                })
                .catch(err => {
                    return next({ error: true, err })
                })
        })
    }
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

}

export default new Request
// export default {}