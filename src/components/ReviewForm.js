import { stepContentClasses } from '@mui/material'
import { useState } from 'react'
import { connect } from 'react-redux'
import { submitReview } from '../redux/actions/MovieActions'

function ReviewForm({ movieId, submitReview }) {
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
      <form className='form' onSubmit={onSubmit}>
        <h1>Review form</h1>
        <label>
          Rating:
          <input
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
          Sex:
          <input
            type='textarea'
            name='sex'
            onChange={(e) => setSex(e.target.value)}
            value={sex}
          />
        </label>
        <br />
        <label>
          Language:
          <input
            type='textarea'
            name='language'
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          />
        </label>
        <br />
        <label>
          Violence:
          <input
            type='textarea'
            name='violence'
            onChange={(e) => setViolence(e.target.value)}
            value={violence}
          />
        </label>
        <br />
        <label>
          Comment:
          <input
            type='textarea'
            name='comment'
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </label>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}

const mapStateToProps = (state) => ({ movieId: state.movieStore.movie.id })

export default connect(mapStateToProps, { submitReview })(ReviewForm)
