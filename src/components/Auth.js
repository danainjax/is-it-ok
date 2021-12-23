import * as React from 'react'
import Button from '@mui/material/Button'
import { connect } from 'react-redux'
import { getUser } from '../redux/actions/AccountActions'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Auth = (props) => {
  const [signup, setSignup] = useState(false)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  const toggleSignup = () => setSignup(!signup)
  return (
    <>
      {signup ? <h1>sign up!</h1> : <h1> log in!</h1>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} />
        <input type='submit' />
      </form>
      <Button variant='contained' onClick={toggleSignup}>
        {signup ? 'log in' : 'sign up'}
      </Button>
    </>
  )
}

const mapStateToProps = (state) => {
  return { user: state.users.user }
}

export default connect(mapStateToProps, { getUser })(Auth)
