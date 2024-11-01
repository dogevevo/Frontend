import React from 'react'
import { Link } from 'react-router-dom';

function Register() {

  const Submit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
    <div className="form">
      <h1 className='title'> Create Your Account  </h1>
      <form action="" onSubmit={Submit}>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder="Password" />
        <button className='btn btn-block' > Register </button>
        <p className='message'> Already Have An Account?  <Link to='/login' > Login </Link>  </p>
      </form>
    </div>
  </div>
  )
}

export default Register