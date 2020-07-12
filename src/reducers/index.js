import { combineReducers } from 'redux'
import layout from "./layout"
import global from "./global"
import templates from "./templates"
import {createHashHistory} from 'history'
import { connectRouter } from 'connected-react-router'
const createHistory = createHashHistory
export const history = createHistory()

export default combineReducers({
  layout,
  global,
  templates,
  router: connectRouter(history)
})