import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import App from './App'
import { Provider } from 'react-redux'
import MovieReducer from './redux/reducers/MovieReducer'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'

const allReducers = combineReducers({ movieStore: MovieReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
