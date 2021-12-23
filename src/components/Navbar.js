import { NavLink } from 'react-router-dom'

export const Navbar = () => {
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
      </ul>
    </div>
  )
}
