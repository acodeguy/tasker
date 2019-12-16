import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../src/redux/reducers/todoList.reducer'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)