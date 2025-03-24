import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='relative pt-10 px-5'>
      <div>
      <h1 className='font-medium text-[28px] w-[188px] h-[70px]'>Signin to your PopX account</h1>
      <p className='w-58 h-12 mt-4.5 mb-8 font-normal text-[18px] opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <form className='rgstrfrm'>
        <div>
          <div className='label'>Email address</div>
          <input type='email' id='email' name='email' placeholder='Enter email address' required/><br/>
        </div>
        <div className='mt-5.5'>
          <div className='label'>Password</div>
          <input type='password' id='password' name='password' placeholder='Enter password' required/><br/>
        </div>
      </form>
      <Link to='/account'><button className='lgnbtn1' type='submit'>Login</button></Link>
    </div>
  )
}

export default Login