export const getUsers = () => {
  return (dispatch) =>
    fetch('http://localhost:3000/users')
      .then((resp) => resp.json())
      .then((users) => dispatch({ type: 'GET_USERS', payload: users }))
}
