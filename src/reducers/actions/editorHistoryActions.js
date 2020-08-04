import _ from 'lodash'
import { ActionCreators } from 'redux-undo'

export const setEditorStyleData = (data) => {
  return { type: 'SET_STYLE_OBJECT', value: data }
}

export const setEditorHtmlData = (data) => {
  return { type: 'SET_HTML_DATA', value: data }
}
export const setStyleStr = (data, options={}) => {
  if (options.update) {
    // update style tag
    let frame = document.getElementsByClassName("gjs-frame")
    let doc = frame[0].contentWindow.document
    let style = doc.getElementById("ss-style")
    let innerHTML = _.clone(data)
    innerHTML = innerHTML.replace('<style>', '')
    innerHTML = innerHTML.replace('</style>', '')
    style.innerHTML = innerHTML
  }
  return { type: 'SET_STYLE_DATA', value: data }
}

export const undo = () => {
  // update style and html tag

  // =========================
  return ActionCreators.undo()
}

export const redo = () => {
  // update style and html tag

  // =========================
  return ActionCreators.redo()
}

export default {}