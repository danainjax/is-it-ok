import Movie from '../Movie'

function MovieList(props) {
  console.log(props, 'props in Movie')
  const movies = props.movies.map((movie) => {
    return <Movie key={movie.title} title={movie.title} image={movie.image} />
  })
  return (
    <div>
      Movies
      {movies}
    </div>
  )
}

export default MovieList
