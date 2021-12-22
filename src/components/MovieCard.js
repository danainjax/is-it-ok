import { Link } from 'react-router-dom'

function MovieCard({
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
  console.log(id)
  return (
    <>
      <div className='card'>
        <Link to={`/movies/${id}`}>
          <img src={image} alt={title} />
        </Link>
        <div className='container'>
          <p>{releaseDate}</p>
          <h4>
            <Link to={`/movies/${id}`}>
              <b>{title}</b>
            </Link>

            <p>{contentRating}</p>
            <p>{runtime}</p>
          </h4>
          <p>{plot}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard
