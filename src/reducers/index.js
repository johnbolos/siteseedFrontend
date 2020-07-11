import { combineReducers } from "redux"
import { connectRouter } from 'connected-react-router'

import layout from "./layout"
import global from "./global"
import templates from "./templates"

export default (history) => combineReducers({
  router: connectRouter(history),
  layout,
  global,
  templates
})
