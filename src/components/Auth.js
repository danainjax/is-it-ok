import * as React from 'react'
import Button from '@mui/material/Button'
import { connect } from 'react-redux'
import { submitSignup, submitLogin } from '../redux/actions/AccountActions'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Auth = (props) => {
  //local state to send to sign up or log in
  const [signup, setSignup] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const toggleSignup = () => setSignup(!signup)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, email, password)
    history.push('/movies')

    signup
      ? props.submitSignup({ name: username, password, email })
      : props.submitLogin({ name: username, password })
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

        {signup && (
          <input
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='email'
          />
        )}

        <input
          type='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='password'
        />

        <Button variant='contained' input type='submit' onClick={toggleSignup}>
          {signup ? 'sign up' : 'log in'}
        </Button>
      </form>
    </>
  )
}

const mapStateToProps = (state) => {
  return { user: state.users.user }
}

export default connect(mapStateToProps, { submitSignup, submitLogin })(Auth)
