import './style.css'
import React, { Component } from 'react'
import User from './components/User'
import MovieList from './components/containers/MovieList'
import { fetchInTheaters } from './actions/MovieActions'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => this.setState({ name: data[0].name }))
  }
  render() {
    console.log(this.state.name)
    return (
      <div>
        <h1>movie safe</h1>
        User: <User name={this.state.name} />
        <MovieList movies={this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movielist: state.movieStore.movies,
})

export default connect(mapStateToProps, { fetchInTheaters })(App)
