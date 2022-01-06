function Review({ name, rating, sex, violence, language, comment }) {
  return (
    <div>
      <p>
        {name}rates it: {rating} ⭐stars
      </p>
      SEX:<p>{sex}</p>
      LANGUAGE:<p>{language}</p>
      VIOLENCE:<p>{violence}</p>
      COMMENT:<p>{comment}</p>
      <p>_________________________</p>
    </div>
  )
}

export default Review
