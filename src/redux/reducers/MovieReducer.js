const initialState = {
  movies: [],
}

export default function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IN_THEATERS':
      return {
        ...state,
        movies: action.payload,
      }
    default:
      return { ...state }
  }
}
