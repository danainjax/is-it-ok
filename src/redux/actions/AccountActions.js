export const getUsers = () => {
  return (dispatch) =>
    fetch('http://localhost:3000/users')
      .then((resp) => resp.json())
      .then((users) => dispatch({ type: 'GET_USERS', payload: users }))
}

export const getUser = (id) => {
  return (dispatch) =>
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((user) => dispatch({ type: 'GET_USER', payload: user }))
}
