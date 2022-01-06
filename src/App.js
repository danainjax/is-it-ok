import './style.css'
import MovieList from './containers/MovieList'
import { SearchBar } from './components/SearchBar'
import { Switch, Route } from 'react-router-dom'
import MovieShow from './components/MovieShow'
import Users from './containers/Users'
import { Navbar } from './components/Navbar'
import Auth from './components/Auth'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin } from './redux/actions/AccountActions'
import ReviewForm from './components/ReviewForm'

function App({ user, autoLogin }) {
  console.log(localStorage.token)
  // useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  return (
    <div>
      <h1>movie safe</h1>

      <Navbar />
      {user ? (
        <div>
          <SearchBar />
          <p></p>
          <ReviewForm />
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
      ) : (
        <Auth />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({ user: state.users.user })

export default connect(mapStateToProps, { autoLogin })(App)
