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
  return ActionCreators.undo()
}

export const redoOnce = () => {
  return ActionCreators.redo()
}

export const undoTimes = (times) => {
  return ActionCreators.jump(-1 * times)
}

export const redoTimes = (times) => {
  return ActionCreators.jump(times)
}

export const resetHistory = () => {
  return ActionCreators.clearHistory()
}
export default {}