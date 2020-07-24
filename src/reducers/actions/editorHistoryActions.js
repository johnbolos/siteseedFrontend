import { ActionCreators } from 'redux-undo'

export const setEditorStyleData = (data) => {
  return { type: 'SET_STYLE_OBJECT', value: data }
}

export const setEditorHtmlData = (data) => {
  return { type: 'SET_HTML_DATA', value: data }
}

export const undo = () => {
  return ActionCreators.undo()
}

export const redo = () => {
    return ActionCreators.redo()
  }

export default {}