export default function MovieReducer(
  state = {
    movies: [],
  },
  action
) {
  switch (action.type) {
    case 'FETCH_IN_THEATERS':
      return {
        ...state.movies,
        movies: action.payload,
      }
    default:
      return state
  }
}
