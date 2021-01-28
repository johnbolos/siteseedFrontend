import _ from 'lodash'
import { ActionCreators } from 'redux-undo'

export const setHistoryStatus = (data) => {
  return { type: 'SET_HISTORY_STATUS', value: data }
}
export const setEditorStyleData = (data, options) => {
  return { type: 'SET_STYLE_OBJECT', value: data, status: (options && options.status) || 'style' }
}

export const setEditorHtmlData = (data) => {
  return { type: 'SET_HTML_DATA', value: data }
}
export const setStyleStr = (data, options = {}) => {
  if (options.update) {
    // update style tag
    let frame = document.getElementsByClassName("gjs-frame")
    let doc = frame[0].contentWindow.document
    let style = doc.getElementById("ss-style")
    if (!style) {
      return { type: '' }
    }
    let innerHTML = _.clone(data)
    innerHTML = innerHTML.replace('<style>', '')
    innerHTML = innerHTML.replace('</style>', '')
    style.innerHTML = innerHTML
  }
  return { type: 'SET_STYLE_DATA', value: data, status: (options && options.status) || 'style' }
}

export const undoOnce = () => {
  // update style and html tag
  return ActionCreators.undo()
}

export const redoOnce = () => {
  // update style and html tag
  return ActionCreators.redo()
}

export const undoTimes = (times) => {
  // update style and html tag
  return ActionCreators.jump(-1 * times)
}

export const redoTimes = (times) => {
  // update style and html tag
  return ActionCreators.jump(times)
}

export default {}