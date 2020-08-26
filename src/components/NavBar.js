import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className='navdiv'>
        <NavLink to='/' exact className='link'>
          Homepage
        </NavLink>
        <NavLink to='/about' exact className='link'>
          About 
        </NavLink>
        <NavLink to='/ref' exact className='link'>
          Refrences
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar
