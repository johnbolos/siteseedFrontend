import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import {createHashHistory} from 'history'
import rootReducer from './reducers'
const createHistory = createHashHistory
export const history =  createHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}


let persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default () => {
  let store = createStore(
    connectRouter(history)(persistedReducer),
    initialState,
    composedEnhancers
  )
  let persistor = persistStore(store)
  return { store, persistor }
}