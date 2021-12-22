const initialMovie = {
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
}

const initialState = {
  movies: [],
  movie: initialMovie,
}

export default function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IN_THEATERS':
      return {
        ...state,
        movies: action.payload,
      }
    case 'GET_MOVIE':
      console.log('Getting the movie show page', action.payload)
      return {
        ...state,
        movie: action.payload,
      }
    default:
      return { ...state }
  }
}
