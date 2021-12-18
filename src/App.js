import './style.css'
import React, { Component } from 'react'
// import User from './components/User'
import MovieList from './components/containers/MovieList'
import { connect } from 'react-redux'
import { fetchInTheaters } from './actions/MovieActions'
import { SearchBar } from './components/SearchBar'

class App extends Component {
  componentDidMount() {
    this.props.fetchInTheaters()
  }
  // getMovies = () => {
  //   this.props.fetchInTheaters()
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>movie safe</h1>
        <SearchBar />
        <p></p>

        {/* User: <User name={this.state.name} /> */}
        {/* <button onClick={() => this.getMovies()}>NOW PLAYING</button> */}
        <MovieList movies={this.props.movielist} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movielist: state.movieStore.movies,
})

export default connect(mapStateToProps, { fetchInTheaters })(App)
