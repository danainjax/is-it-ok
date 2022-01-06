function Review({ name, rating, comment }) {
  return (
    <div>
      <p>
        {name}rates it: {rating} STARS
      </p>
      <p>{comment}</p>
    </div>
  )
}

export default Review
