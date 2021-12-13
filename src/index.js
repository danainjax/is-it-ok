import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import App from './App'
import MovieList from './components/containers/MovieList'
import { Provider } from 'react-redux'
import MovieReducer from './reducers/MovieReducer'
import thunk from 'redux-thunk'

const allReducers = combineReducers({ movieStore: MovieReducer })

const store = createStore(allReducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
