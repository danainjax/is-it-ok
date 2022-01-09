function Review({ name, rating, sex, violence, language, comment }) {
  return (
    <div className='review-card'>
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

export default Review
