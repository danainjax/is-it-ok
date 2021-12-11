import React, { Component } from 'react'
const apiKey = process.env.REACT_APP_IMDB_API_KEY
class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: [],
      trailer: [],
      poster: [],
    }
  }
  componentDidMount() {
    fetch(`https://imdb-api.com/en/API/InTheaters/` + apiKey)
      .then((response) => response.json())
      .then((data) => console.log(data))
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
        <h1>Movies</h1>
      </div>
    )
  }
}
export default MovieList
