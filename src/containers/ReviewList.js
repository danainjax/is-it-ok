import { connect } from 'react-redux'
import ReviewCard from '../components/Review.Card.js'

function ReviewList({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <ReviewCard {...review} key={review.id} />
      ))}
    </>
  )
}

const mapStateToProps = (state) => ({
  reviews: state.movieStore.movie.reviews,
})

export default connect(mapStateToProps)(ReviewList)
