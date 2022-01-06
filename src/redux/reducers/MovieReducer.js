const initialMovie = {
  id: null,
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
  reviews: [],
}

const initialState = {
  movies: [],
  movie: initialMovie,
}

export function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IN_THEATERS':
      return {
        ...state,
        movies: action.payload,
      }

    case 'GET_MOVIE':
      return {
        ...state,
        movie: action.payload,
      }
    case 'CLEAR_MOVIE':
      return { ...state, movie: initialMovie }

    default:
      return { ...state }
  }
}
