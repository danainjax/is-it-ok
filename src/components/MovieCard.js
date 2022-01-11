import { Link } from 'react-router-dom'
import { Card } from '@mui/material'

function MovieCard({ id, image, title, stars, year, rank }) {
  return (
    <>
      <div className='card'>
        <Card>
          <Link to={`/movies/${id}`}>
            <img className='movie-index' src={image} alt={title} />
          </Link>
          <div className='container'>
            <h4>
              <Link style={{ textDecoration: 'none' }} to={`/movies/${id}`}>
                <h4>{title}</h4>
              </Link>
            </h4>
          </div>
        </Card>
      </div>
    </>
  )
}

export default MovieCard
