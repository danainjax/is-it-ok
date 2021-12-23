import './style.css'
import MovieList from './containers/MovieList'
import { SearchBar } from './components/SearchBar'
import { Switch, Route } from 'react-router-dom'
import MovieShow from './containers/MovieShow'
import Users from './containers/Users'
import { Navbar } from './components/Navbar'
import Auth from './components/Auth'
import { connect } from 'react-redux'

function App({ user }) {
  console.log(user)
  return (
    <div>
      <h1>movie safe</h1>

      <Navbar />
      {user ? (
        <div>
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
      ) : (
        <Auth />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({ user: state.users.user })

export default connect(mapStateToProps)(App)
