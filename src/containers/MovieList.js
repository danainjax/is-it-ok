import MovieCard from '../components/MovieCard'
import { fetchInTheaters } from '../redux/actions/MovieActions'
import { connect } from 'react-redux'
import { useEffect } from 'react'

function MovieList({ fetchInTheaters, movielist }) {
  useEffect(fetchInTheaters, [fetchInTheaters])
  //dependency, useEffect will run fetchInTheaters if fetchInTheaters changes

  return (
    <div className='cards'>
      {movielist.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { movielist: state.movieStore.movies }
}

export default connect(mapStateToProps, { fetchInTheaters })(MovieList)
