import MovieCard from '../components/MovieCard'
import { fetchInTheaters, searchMovie } from '../redux/actions/MovieActions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import SearchBar from '../components/SearchBar'

function MovieList({ fetchInTheaters, movielist, searchMovie }) {
  useEffect(fetchInTheaters, [fetchInTheaters, searchMovie])
  //dependency, useEffect will run fetchInTheaters if fetchInTheaters changes

  const cards = () => (
    <div className='cards'>
      {movielist.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  )

  const loader = () => (
    <Loader
      type='Circles'
      color='#00BFFF'
      // height={250}
      // width={250}
      timeout={3000}
    />
  )

  return fetchInTheaters ? cards() : loader()
}

const mapStateToProps = (state) => {
  return { movielist: state.movieStore.movies }
}

export default connect(mapStateToProps, {
  fetchInTheaters,
  searchMovie,
  SearchBar,
})(MovieList)
