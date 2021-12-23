import { Link } from 'react-router-dom'
import { Card } from '@mui/material'

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
  return (
    <>
      <div className='card'>
        <Card>
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
        </Card>
      </div>
    </>
  )
}

export default MovieCard
