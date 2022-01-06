import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMovie, clearMovie } from '../redux/actions/MovieActions'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import ReviewList from '../containers/ReviewList'

import { useEffect } from 'react'

function MovieShow({
  getMovie,
  clearMovie,
  movie,
  fullTitle,
  id,
  title,
  image,
  plot,
  year,
  stars,
  runtime,
  releaseDate,
  director,
  genres,
}) {
  const routeId = useParams().id

  useEffect(() => {
    getMovie(routeId)
    return clearMovie
  }, [getMovie, routeId, clearMovie])

  const loadedMovie = () => (
    <div className='card'>
      <div className='container'>
        <h1>{fullTitle}</h1>
        <img className='movie-show' src={image} alt={title} />
        <ReviewList />
      </div>
    </div>
  )

  const loader = () => (
    <Loader
      type='Circles'
      color='#00BFFF'
      height={400}
      width={400}
      timeout={5000}
    />
  )
  return id ? loadedMovie() : loader()
}

const mapStateToProps = (state) => {
  return { ...state.movieStore.movie }
}

export default connect(mapStateToProps, { getMovie, clearMovie })(MovieShow)
