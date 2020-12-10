import React from 'react'
import { toast } from 'react-toastify'
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

export const showToast = (data) => {
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
    });
}