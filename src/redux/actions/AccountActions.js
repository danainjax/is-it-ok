export const getUsers = () => {
  return (dispatch) =>
    fetch('http://localhost:3000/users')
      .then((resp) => resp.json())
      .then((users) => dispatch({ type: 'GET_USERS', payload: users }))
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
    }).then((res) => {
      console.log(res)
      handleUserResponse(res, dispatch)
    })
}
export const autoLogin = () => {
  return (dispatch) =>
    fetch('http://localhost:3000/me', {
      headers: {
        'Authorization': localStorage.token,
      },
    }).then((res) => handleUserResponse(res, dispatch))
}

export const submitLogin = (user) => {
  return (dispatch) =>
    fetch('https://localhost3000/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((resp) => {
        localStorage.token = resp.token
        dispatch({ type: 'SET_USER', payload: resp.user })
      })
}

function handleUserResponse(res, dispatch) {
  if (res.ok) {
    res.json().then((response) => {
      localStorage.token = response.token
      dispatch({ type: 'SET_USER', payload: response.user })
    })
  } else {
    res.json().then((res) => alert(res.errors))
  }
}

export const logout = () => {
  console.log(logout)
  return (dispatch) => {
    localStorage.clear()
    console.log('logging out action')
    dispatch({ type: 'LOGOUT' })
  }
}
