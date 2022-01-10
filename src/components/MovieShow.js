import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMovie, clearMovie, getTrailer } from '../redux/actions/MovieActions'
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
}) {
  const routeId = useParams().id

  useEffect(() => {
    getMovie(routeId)
    return clearMovie
  }, [getMovie, routeId, clearMovie, getTrailer])

  const loadedMovie = () => (
    <>
      <div className='movie-show'>
        <h1>{title}</h1>
        <img className='movie-show' src={image} alt={title} />
        <button className='submit-btn'>write a review of {title} </button>
      </div>
      {/* <Trailer /> */}
      <div className='movie-details'>
        <iframe
          src='https://www.imdb.com/video/imdb/vi2959588889/imdb/embed'
          // src={movie.trailer}
          title='Inception'
          // title={title}
          width='100%'
          height='100%'
        ></iframe>

        <p>imdb rating: {imdbRating}</p>
        <p>rank: {rank}</p>
        <p> crew: {crew}</p>
      </div>
      <div className='review-form'>
        <ReviewForm />
      </div>
      <div className='review-card'>
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
    // trailer: { ...state.movieStore.trailer },
  }
}

export default connect(mapStateToProps, { getMovie, clearMovie, getTrailer })(
  MovieShow
)
