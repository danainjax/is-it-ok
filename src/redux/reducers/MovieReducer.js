import searchText from '../../components/SearchBar'

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
  ttId: '',
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

    case 'EDIT_REVIEW':
      let allReviews = state.movie.reviews.filter(
        (review) => review.id !== action.payload
      )
      return {
        ...state,
        movie: {
          ...state.movie,
          reviews: [action.payload, ...allReviews],
        },
      }

    case 'DELETE_REVIEW':
      return {
        ...state,
        movie: {
          ...state.movie,
          reviews: [
            ...state.movie.reviews.filter(
              (review) => review.id !== action.payload.id
            ),
          ],
        },
      }

    case 'GET_TRAILER':
      return { ...state, trailer: action.payload }

    default:
      return { ...state }

    case 'SEARCH_MOVIE':
      console.log(action.payload)
      return {
        ...state,
        movies: state.movies.filter((movie) =>
          movie.title.includes(action.payload)
        ),
      }
  }
}
