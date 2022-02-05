import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  getMovie,
  clearMovie,
  getTrailer,
  deleteReview,
} from '../redux/actions/MovieActions'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import ReviewList from '../containers/ReviewList'
import ReviewForm from './ReviewForm'
import '../style.css'
import Trailer from './Trailer'

import { useEffect } from 'react'

function MovieShow({
  getMovie,
  clearMovie,
  movie,
  rank,
  title,
  crew,
  imdbRating,
  ttId,
  id,
  image,
  year,
  stars,
  getTrailer,
  deleteReview,
}) {
  const routeId = useParams().id

  useEffect(() => {
    getMovie(routeId)
    // getTrailer(ttId)
    return clearMovie
  }, [getMovie, routeId, clearMovie, getTrailer, deleteReview])

  const loadedMovie = () => (
    <>
      <section>
        <div className='movie-show'>
          <h1>{title}</h1>
          <img className='image-movie-show' src={image} alt={title} />
          {/* <button className='submit-btn'>write a review of {title} </button> */}
        </div>

        <div className='review-form'>
          <ReviewForm />
        </div>
      </section>
      {/* <div className='trailer'> */}
      <Trailer ttId={ttId} />
      {/* </div> */}

      <div className='movie-details'>
        <p>imdb rating: {imdbRating}</p>
        <p>rank: {rank}</p>
        <p> crew: {crew}</p>
      </div>

      <div className='review-list'>
        <ReviewList />
      </div>
    </>
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
  return {
    ...state.movieStore.movie,
    reviews: state.movieStore.movie.reviews,
    trailer: { ...state.movieStore.trailer },
  }
}

export default connect(mapStateToProps, {
  getMovie,
  clearMovie,
  getTrailer,
  deleteReview,
})(MovieShow)
