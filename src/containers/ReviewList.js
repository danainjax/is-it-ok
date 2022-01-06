import { connect } from 'react-redux'
import Review from '../components/Review.js'

function ReviewList({ reviews }) {
  console.log({ reviews })
  return (
    <div>
      {reviews.map((review) => (
        <Review {...review} key={review.id} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  reviews: state.movieStore.movie.reviews,
})

export default connect(mapStateToProps)(ReviewList)
