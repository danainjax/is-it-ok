import './style.css'
import React, { Component } from 'react'
import MovieList from './containers/MovieList'
import { SearchBar } from './components/SearchBar'
import { Switch, Route } from 'react-router-dom'
import MovieShow from './containers/MovieShow'
import Users from './containers/Users'
import { Navbar } from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <h1>movie safe</h1>
        <Navbar />
        <SearchBar />
        <p></p>
        <Switch>
          {/* go from most specific to least specific for routes */}
          <Route path='/movies/:id'>
            <MovieShow />
          </Route>
          <Route path='/movies'>
            <MovieList />
          </Route>
          <Route path='/users/:id'>
            <Users />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App
