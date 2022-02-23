import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { searchMovie } from '../redux/actions/MovieActions'
import MovieList from '../containers/MovieList'
import '../style.css'

function SearchBar({ movies, searchMovie }) {
  useEffect(searchMovie, [searchMovie])
  const [searchText, setSearchText] = useState('')
  const searchForMovie = (searchText, e) => {
    e.preventDefault()
    setSearchText(searchText)
    searchMovie(searchText)
    console.log(movies) //this is the current state of the movies array
    console.log(movies.filter((movie) => movie.title.includes(searchText))) // this is after we filter the results by the searchText)
    // We now have the filtered result movie object in an array. How do we put that return from searchMovie(searchText) and setState with it? Setting the state of the movies array will change what displays on the page, is my thought
  }

  return (
    <>
      <form onSubmit={(e) => searchForMovie(searchText, e)}>
        <input
          className='searchbar'
          type='text'
          name='movie'
          placeholder='search movie by title'
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className='searchbar' type='submit'>
          submit
        </button>
      </form>
      {/* {movies.map((movie) => (
        <MovieCard id={movie.id} />
      ))} */}
      <MovieList movielist={movies} />

      <div className='background'></div>
    </>
  )
}
const mapStateToProps = (state) => ({
  movie: state.movieStore.movie,
  movies: state.movieStore.movies,
})

export default connect(mapStateToProps, { searchMovie, MovieList })(SearchBar)
