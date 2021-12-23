import { connect } from 'react-redux'
import { getUser } from '../redux/actions/AccountActions'
import { useState } from 'react'

const Auth = (props) => {
  const [signup, setSignup] = useState(false)

  const toggleSignup = () => setSignup(!signup)
  return (
    <>
      {signup ? <h1>sign up!</h1> : <h1> log in!</h1>}
      <button onClick={toggleSignup}> {signup ? 'log in' : 'sign up'}</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return { user: state.users.user }
}

export default connect(mapStateToProps, { getUser })(Auth)
