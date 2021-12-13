import React, { Component } from 'react'
const apiKey = process.env.REACT_APP_IMDB_API_KEY
class MovieList extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#3a539b',
          color: 'white',
          fontFamily: 'Raleway',
          textAlign: 'left',
        }}
      >
        <h1>Movie List</h1>
      </div>
    )
  }
}
export default MovieList
