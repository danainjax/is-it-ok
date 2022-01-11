import { useState } from 'react'
import { connect } from 'react-redux'
import { submitReview } from '../redux/actions/MovieActions'

function ReviewForm({ movieId, submitReview, movie }) {
  const [rating, setRating] = useState(5)
  const [sex, setSex] = useState('')
  const [language, setLanguage] = useState('')
  const [violence, setViolence] = useState('')
  const [comment, setComment] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const newReview = {
      rating,
      sex,
      language,
      violence,
      comment,
      movieId,
    }
    console.log(newReview)
    submitReview(newReview, movieId)
    setRating(5)
    setSex('')
    setViolence('')
    setLanguage('')
    setComment('')
  }

  return (
    <>
      <form className='form-box' onSubmit={onSubmit}>
        <h4 className='review'>Write a review of {movie.title}</h4>
        <label id='star-label'>
          Stars
          <input
            id='stars'
            type='number'
            name='rating'
            min='1'
            max='5'
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </label>
        <br />
        <label>
          Sex
          <input
            type='textarea'
            name='sex'
            onChange={(e) => setSex(e.target.value)}
            value={sex}
            placeholder='sex'
          />
        </label>
        <br />
        <label>
          Language
          <input
            type='textarea'
            name='language'
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
            placeholder='language'
          />
        </label>
        <br />
        <label>
          Violence
          <input
            type='textarea'
            name='violence'
            onChange={(e) => setViolence(e.target.value)}
            value={violence}
            placeholder='violence'
          />
        </label>
        <br />
        <label>
          Comment
          <input
            type='textarea'
            name='comment'
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            placeholder='tell other families what you think'
          />
        </label>
        <br />
        <button className='submit-btn' type='submit'>
          Post my review
        </button>
      </form>
    </>
  )
}

const mapStateToProps = (state) => ({
  movieId: state.movieStore.movie.id,
  movie: state.movieStore.movie,
})

export default connect(mapStateToProps, { submitReview })(ReviewForm)
