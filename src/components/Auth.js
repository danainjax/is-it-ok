import * as React from 'react'
import Button from '@mui/material/Button'
import { connect } from 'react-redux'
import { getUser, submitSignup } from '../redux/actions/AccountActions'
import { useState } from 'react'

const Auth = (props) => {
  //local state to send to sign up or log in
  const [signup, setSignup] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const toggleSignup = () => setSignup(!signup)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitSignup({ name: username, password })
  }

  return (
    <>
      {signup ? <h1>sign up!</h1> : <h1> log in!</h1>}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username'
        />
        <input
          type='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='password'
        />

        <Button variant='contained' input type='submit' onClick={toggleSignup}>
          {signup ? 'log in' : 'sign up'}
        </Button>
      </form>
    </>
  )
}

const mapStateToProps = (state) => {
  return { user: state.users.user }
}

export default connect(mapStateToProps, { getUser, submitSignup })(Auth)
