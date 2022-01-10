const initialMovie = {
  id: null,
  reviews: [],
  title: '',
  image: '',
  year: '',
  stars: '',
  crew: '',
  imdbRating: '',
  ttID: '',
  rank: '',
}

const initialTrailer = {
  ttID: '',
  id: '',
  title: '',
  videoTitle: '',
  videoDescription: '',
  linkEmbed: '',
}

const initialState = {
  movies: [],
  movie: initialMovie,
  trailer: initialTrailer,
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

    case 'ADD_REVIEW':
      return {
        ...state,
        movie: {
          ...state.movie,
          reviews: [action.payload, ...state.movie.reviews],
        },
      }

    case 'GET_TRAILER':
      return { ...state, trailer: action.payload }

    default:
      return { ...state }
  }
}
