import './style.css'
import React, { Component } from 'react'
import MovieList from './containers/MovieList'
import { SearchBar } from './components/SearchBar'
import { Switch, Route } from 'react-router-dom'
import MovieShow from './containers/MovieShow'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <div>
        <h1>movie safe</h1>
        <Switch>
          {/* go from most specific to least specific for routes */}
          <Route path='/movies/:id'>
            <MovieShow />
          </Route>
          <Route path='/movies'>
            <MovieList />
            MovieList
          </Route>
          <Route path='/account'>
            <User />
          </Route>
        </Switch>

        <SearchBar />
        <p></p>
      </div>
    )
  }
}

export default App
