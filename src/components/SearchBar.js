import { connect } from 'react-redux'
import { useState } from 'react'
import '../style.css'

function SearchBar() {
  const [searchText, setSearchText] = useState('')
  const searchForMovie = (searchText) => {
    setSearchText(searchText)
    console.log(searchText)
    //now we have the search text, need to make an action that filters the movies by the search text and returns the correct movie, or those closest
  }

  return (
    <>
      <form onSubmit={(e) => searchForMovie(searchText)}>
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
      <div className='background'></div>
    </>
  )
}
const mapStateToProps = (state) => ({
  movie: state.movieStore.movie,
  movies: state.movieStore.movies,
})

export default connect(mapStateToProps)(SearchBar)
