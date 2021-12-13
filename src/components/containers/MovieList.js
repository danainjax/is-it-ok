import Movie from '../Movie'

function MovieList(props) {
  console.log(props, 'props in Movie')
  const movies = props.movies.map((movie) => {
    return <Movie key={movie.id} title={movie.title} image={movie.image} />
  })
  return <div>{movies}</div>
}

export default MovieList
