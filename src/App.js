import './style.css'
import MovieList from './containers/MovieList'
import SearchBar from './components/SearchBar'
import { Switch, Route } from 'react-router-dom'
import MovieShow from './components/MovieShow'
import User from './components/User'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin } from './redux/actions/AccountActions'

function App({ user, autoLogin }) {
  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  return (
    <div>
      <h1>movie safe</h1>

      <Navbar />
      {user.name ? (
        <div>
          {/* <SearchBar /> */}
          <Switch>
            {/* go from most specific to least specific for routes */}
            <Route path='/movies/:id'>
              <MovieShow />
            </Route>
            <Route path='/movies'>
              <MovieList />
            </Route>
            <Route path='/users/:id'>
              <User />
            </Route>
            <Route path='/search'>
              <SearchBar />
            </Route>
          </Switch>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({ user: state.users.user })

export default connect(mapStateToProps, { autoLogin })(App)
