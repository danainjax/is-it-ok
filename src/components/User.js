import { connect } from 'react-redux'
import { getUser } from '../redux/actions/AccountActions'

function User({ getUser, user }) {
  console.log(user)
  return (
    <>
      <div className='cards'>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <div className='background'></div>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return { user: state.users.user }
}
export default connect(mapStateToProps, { getUser })(User)
