import React from 'react'
import _ from 'lodash'
import Async from 'async'
import { toast } from 'react-toastify'
import shortid from 'shortid'
import { setS3Dir } from "../../reducers/actions/userActions"
import _s3 from './s3'

export const svg = (path, options = {}) => {
    const { width, height } = options
    return (<img style={{ width: width ? width : '16px', height: height ? height : '16px' }} src={`${path}`}></img>)
}

const elementDistanceToCursor = (elem, mouse) => { // get distance to element
    var b = elem.getBoundingClientRect();
    var dx = 0;
    var dy = 0;

    //Compute distance to elem in X
    if (mouse.x < b.left)
        dx = b.left - mouse.x;
    else if (mouse.x > b.right)
        dx = b.right - mouse.x;

    //Compute distance to elem in Y
    if (mouse.y < b.top)
        dy = b.top - mouse.y;
    else if (mouse.y > b.bottom)
        dy = b.bottom - mouse.y;

    return Math.floor(Math.sqrt(dx * dx + dy * dy));
}
export const closestElement = (mouse, wrapperSelector) => {
    let closestElement = null
    let minDis = 99999
    let wrapper = document.getElementById(wrapperSelector)
    HTMLCollection.prototype.every = Array.prototype.every
    wrapper.children.every((el) => {
        let dis = elementDistanceToCursor(el, mouse)
        if (dis == 0) {
            if (el.children.length == 0) {
                closestElement = el
                return false
            }
            closestElement = closestElement(mouse, el.id)
            return false
        }
        if (dis < minDis) {
            minDis = dis
            closestElement = el
        }
        return true
    })
    return closestElement
}

export const showToast = (data, cb) => {
    const { type, message } = data
    let icon = ''
    if (type) {
        switch (type) {
            case 'success':
                icon = (<i class="fa fa-check toast-icon-success" aria-hidden="true"></i>)
                break;
            case 'warning':
                icon = (<i class="fa fa-exclamation-triangle toast-icon-error" aria-hidden="true"></i>)
                break;
            case 'error':
                icon = (<i class="fa fa-exclamation-triangle toast-icon-error" aria-hidden="true"></i>)
                break;
        }
    }
    toast(<>{icon}{message}</>, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // onOpen: () => cb && cb(),
        onClose: () => cb && cb(),
    });
}

const previewContentToArray = (contentObj, index = '') => {
    let resp = []
    _.forEach(contentObj, (item, key) => {
        if (typeof (item) === 'string' || typeof (item) === 'function') {
            let type = 'text/plain'
            if (key.includes('.html')) {
                type = "text/html"
            } else if (key.includes('.css')) {
                type = "text/css"
            }

            if (typeof (item) === 'string') {
                resp.push({ path: index, file: new File([item], key, { type }) })
            } else if (typeof (item) === 'function') {
                resp.push({ path: index, file: new File([item()], key, { type }) })
            }
        } else {
            resp = [...resp, ...previewContentToArray(item, '/' + key)]
        }
    })
    return resp
}

export const addStaticContent = (contentObj, props) => {
    return new Promise(resolve => {
        let { s3Dir, projectId, pagesStore, dispatch } = props
        // contentObj = {
        //     css: {
        //         'styles.css': `asd`
        //     },
        //     'index.html': `<body>aasddd</body>`
        // }

        let uploadsArray = previewContentToArray(contentObj)
        s3Dir = 'Z7c_6ak5A'
        if (!s3Dir) {
            // create new userS3Dir
            s3Dir = shortid.generate() //replace this with user _id
            dispatch(setS3Dir(s3Dir))
        }

        if (!projectId) {
            projectId = 6 //replace this with project _id
        }
        s3Dir += `/preview/${projectId}`
        let location = ''
        const page = pagesStore.pages[pagesStore.currentPage]
        let pageNameMatch = _.lowerCase((page.seo && page.seo.name) || page.name) + '.html'
        if (page.homePage) {
            pageNameMatch = 'index.html'
        }
        Async.each(uploadsArray, (item, cb) => {
            _s3.uploadFile(item.file, s3Dir + item.path, (resp) => {
                if (resp.error) {
                    if (resp.message) {
                        console.error(resp.message)
                        showToast({ type: 'error', message: resp.message })
                    }
                }

                if (item.file.name == pageNameMatch) {
                    location = resp.data.location
                }
                cb()
            })
        }, (err) => {
            return resolve(location)
        })
    })
}