import { useState } from 'react'

function ReviewForm() {
  return (
    <>
      <form>
        <h1>Review form</h1>
        <label>
          Rating:
          <input type='number' name='rating' min='1' max='5' />
        </label>
        <label>
          Sex:
          <input type='textarea' name='sex' />
        </label>
        <label>
          Language:
          <input type='textarea' name='language' />
        </label>
        <label>
          Violence:
          <input type='textarea' name='violence' />
        </label>
        <label>
          Comment:
          <input type='textarea' name='comment' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}

export default ReviewForm
