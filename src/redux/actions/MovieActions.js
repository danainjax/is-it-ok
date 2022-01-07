export const fetchInTheaters = () => {
  return (dispatch) =>
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((movies) =>
        dispatch({ type: 'FETCH_IN_THEATERS', payload: movies })
      )
}

export const getMovie = (id) => {
  return (dispatch) =>
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((movie) => dispatch({ type: 'GET_MOVIE', payload: movie }))
}

export const clearMovie = () => ({ type: 'CLEAR_MOVIE' })

export const submitReview = (review, movieId) => {
  console.log('submit review action')
  return (dispatch) =>
    fetch(`http://localhost:3000/movies/${movieId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then(console.log)
}

// export const mostPopular = () => {
//   return (dispatch) =>
//     fetch('https://localhost:3000/popular')
//       .then((resp) => resp.json())
//       .then((movies) => dispatch({ type: 'MOST_POPULAR', payload: movies }))
// }

// work on a fetch to a route that will show the individual movie trailer
// export const trailer = () => {
//   return (dispatch) => fetch('')
// }
