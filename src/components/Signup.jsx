import React from 'react'
import { Link } from 'react-router'

const Signup = () => {
  return (
    <div className='relative px-5 pt-10 pb-7.5 h-screen'>
      <h1 className='rgstrh1'>Create your PopX account</h1>
      <div>
        <form className='absolute top-35.5 bottom-89'>
          <div className='rgstrfrm'>
          <div className='label'>Full Name *</div>
          <input type='text' id='name' name='name' required/><br/>
          </div>
          <div className='rgstrfrm'>
          <div className='label'>Phone number *</div>
          <input type='phone' id='phone' name='phone' required/><br/>
          </div>
          <div className='rgstrfrm'>
          <div className='label'>Email address *</div>
          <input type='email' id='email' name='email' required/><br/>
          </div>
          <div className='rgstrfrm'>
          <div className='label'>Password *</div>
          <input type='password' id='password' name='password' required/><br/>
          </div>
          <div className='rgstrfrm'>
          <div className='label'>Company name</div>
          <input type='company' id='company' name='company'/><br/>
          </div>
          <div className='space-x-5 space-y-2'>
            <p>Are you an Agency?*</p>
            <div className='inline space-x-1.5'>
              <input type='radio' id='yes' name='agency' value='yes'/>
              <label for='yes'>Yes</label>
            </div>
            <div className='inline space-x-1.5'>
              <input type='radio' id='no' name='agency' value='no'/>
              <label for='no'>No</label> 
            </div>
          </div>
        </form>
        <Link to='/account'><button className='hmbtn1 absolute bottom-7.5' type='submit'>Create Account</button></Link>
      </div>
    </div>
  )
}

export default Signup