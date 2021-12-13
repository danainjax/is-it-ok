export const fetchInTheaters = () => {
  return (dispatch) =>
    fetch('http:localhost:3000/movies')
      .then((resp) => resp.json())
      .then((movies) =>
        dispatch({ type: 'FETCH_IN_THEATERS', payload: movies })
      )
}
