import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/AccountActions'

function Navbar({ logout, user }) {
  return (
    <div className='navbar'>
      <ul className='navbar'>
        <li>
          <NavLink to='/movies'>movies</NavLink>
        </li>
        <li>
          <NavLink to='/movies'>now playing</NavLink>
        </li>
        <li>
          <NavLink to='/user/:id'>my account</NavLink>
        </li>
        <li>
          <NavLink to='/reviews'>reviews</NavLink>
        </li>
        <li>
          <NavLink to='/search'>search</NavLink>
        </li>
        <li>
          <button onClick={logout}>logout </button>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.users.user,
})

export default connect(mapStateToProps, { logout })(Navbar)
