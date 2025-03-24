import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav>
      <ul className='flex bg-red-600 h-16 items-center pl-4 space-x-6 text-white font-semibold'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/account'>Account</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar