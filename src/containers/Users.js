import { getUsers } from '../redux/actions/AccountActions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import User from '../components/User'

function Users({ getUsers, users }) {
  useEffect(getUsers, [getUsers])
  console.log(users)
  return (
    <div className='cards'>
      {users.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return { users: state.users.users }
}
export default connect(mapStateToProps, { getUsers })(Users)
