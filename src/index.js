import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Store, { history } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './containers/app'

import * as serviceWorker from './serviceWorker';
window.$ = window.jQuery = require('jquery')
const { store, persistor } = Store()
const target = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  target
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
