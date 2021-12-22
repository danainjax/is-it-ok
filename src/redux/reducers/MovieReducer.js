const initialState = {
  movies: [],
  movieShow: {
    id: '',
    title: '',
    fullTitle: '',
    image: '',
    plot: '',
    year: '',
    stars: '',
    runtime: '',
    releaseDate: '',
    director: '',
    genres: '',
  },
}

export default function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IN_THEATERS':
      return {
        ...state,
        movies: action.payload,
      }
    case 'MOVIE_SHOW':
      console.log('Getting the movie show page', action.payload)
      return {
        ...state,
        movieShow: action.payload,
      }
    default:
      return { ...state }
  }
}
