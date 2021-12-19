import './style.css'
import React, { Component } from 'react'
import MovieList from './containers/MovieList'
import { SearchBar } from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div>
        <h1>movie safe</h1>
        <SearchBar />
        <p></p>

        <MovieList />
      </div>
    )
  }
}

export default App
