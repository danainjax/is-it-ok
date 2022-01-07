import { connect } from 'react-redux'
import ReviewCard from '../components/Review.Card.js'

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard {...review} key={review.id} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  reviews: state.movieStore.movie.reviews,
})

export default connect(mapStateToProps)(ReviewList)
