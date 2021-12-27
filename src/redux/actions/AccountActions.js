export const getUsers = () => {
  return (dispatch) =>
    fetch('http://localhost:3000/users')
      .then((resp) => resp.json())
      .then((users) => dispatch({ type: 'GET_USERS', payload: users }))
}

export const setUser = (id) => {
  return (dispatch) =>
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((user) => dispatch({ type: 'SET_USER', payload: user }))
}

export const submitSignup = (user) => {
  console.log(user)
  return (dispatch) =>
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) => console.log(res))
}

function handleUserResponse(res, dispatch) {
  console.log(res)
  if (res.ok) {
    res.json().then((response) => {
      localStorage.token = response.token
      console.log(localStorage.token)
      dispatch({ type: 'SET_USER', payload: response.user })
    })
  } else {
    res.json().then((res) => alert(res.errors))
  }
}
