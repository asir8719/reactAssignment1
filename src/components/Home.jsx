import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <div className='w-58'>
        <h1 className='hmh1'>Welcome to PopX</h1>
        <p className='hmp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div>
        <Link to='/signup'><button className='hmbtn1'>Create Account</button></Link>
        <Link to='/login'><button className='hmbtn2'>Already Registered? Login</button></Link>
      </div>
    </div>
  )
}

export default Home