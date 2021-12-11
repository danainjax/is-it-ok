import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MovieList from './components/containers/MovieList'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MovieList />
  </React.StrictMode>,
  document.getElementById('root')
)
