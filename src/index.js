import React from 'react'
import ReactDOM from 'react-dom'
import Page from './containers/page'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import reduser from './store/reducers/index'
import { Provider } from 'react-redux'

const store = createStore(reduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
