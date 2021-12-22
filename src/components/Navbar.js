import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar'>
        <li>
          <NavLink to='/movies'>movies</NavLink>
        </li>
        <li>
          <NavLink to='/'>home</NavLink>
        </li>
      </ul>
    </div>
  )
}
