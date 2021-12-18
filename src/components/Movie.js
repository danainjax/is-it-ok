function Movie({
  id,
  image,
  title,
  releaseDate,
  contentRating,
  runtime,
  plot,
  stars,
  genres,
  year,
  director,
}) {
  return (
    <>
      <div className='card'>
        <img src={image} alt={title} />
        <div className='container'>
          <p>{releaseDate}</p>
          <h4>
            <b>{title}</b>
            <p>{contentRating}</p>
            <p>{runtime}</p>
          </h4>
          <p>{plot}</p>
          <ul>
            <li>{year}</li>
            <li>{stars}</li>
            <li>{genres}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Movie
