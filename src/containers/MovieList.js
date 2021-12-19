import Movie from '../components/Movie'

function MovieList(props) {
  console.log(props, 'props in Movie')
  const movies = props.movies.map((movie) => {
    return (
      <Movie
        key={movie.id}
        title={movie.title}
        image={movie.image}
        plot={movie.plot}
        year={movie.year}
        stars={movie.stars}
        runtime={movie.runtime}
        releaseDate={movie.releaseDate}
        contentRating={movie.contentRating}
        genres={movie.genres}
        director={movie.director}
        full_title={movie.full_title}
      />
    )
  })
  return <div className='cards'>{movies}</div>
}

export default MovieList
