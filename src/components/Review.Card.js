import { connect } from 'react-redux'

function Review({
  name,
  rating,
  sex,
  violence,
  language,
  comment,
  movieId,
  movie,
}) {
  return (
    <div className='review-card'>
      <button onClick={() => console.log('delete')}>X</button>
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

const mapStateToProps = (state) => ({
  movieId: state.movieStore.movie.id,
  movie: state.movieStore.movie,
})

export default connect(mapStateToProps)(Review)
