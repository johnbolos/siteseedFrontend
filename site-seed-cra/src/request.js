import axios from 'axios'

import { apiUrl } from './settings.js'

const authAxios = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
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

}

export default Request
// export default {}