import { connect } from 'react-redux'
import ReviewList from '../containers/ReviewList'
import { deleteReview } from '../redux/actions/MovieActions'

function Review({
  name,
  id,
  rating,
  sex,
  violence,
  language,
  comment,
  movieId,
  movie,
  deleteReview,
  reviews,
}) {
  const onSubmit = (e) => {
    console.log(movieId)
    console.log(id)
    e.preventDefault()
    deleteReview(movieId, id)
  }

  return (
    <div className='review-card'>
      <button onClick={onSubmit}>X</button>
      <p>
        {name} rates it: {rating} ⭐stars
      </p>
      SEX:<p>{sex}</p>
      LANGUAGE:<p>{language}</p>
      VIOLENCE:<p>{violence}</p>
      COMMENT:<p>{comment}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  movieId: state.movieStore.movie.id,
  movie: state.movieStore.movie,
  ...state,
  reviews: state.movieStore.movie.reviews,
})

export default connect(mapStateToProps, { deleteReview, ReviewList })(Review)
