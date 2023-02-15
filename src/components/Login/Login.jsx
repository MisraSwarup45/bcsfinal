import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai'
import Navbar from '../Navbar/Navbar';

import "./Login.css"

const Login = () => {

  return (
    <div className='container'>
      <Navbar />
      <div className='back--container'>
        <BsArrowLeft />
        <Link to='/' className='back--btn'>Back</Link>
      </div>
      <div className='login--body'>
        <div className='login--title'>
          Login
        </div>
        <div className='btn--container'>
          <div className='btn--body'>
            as Client
          </div>
          <div className='btn--body'>
            as Creator
          </div>
          <div className='btn--body'>
            for Career
          </div>
        </div>
        <div className='contact--container'>
          <input className='login--email' type="email" placeholder='Email' />
          <input className='login--email' type="email" placeholder='Password' />
        </div>
        <div className='loginbtn--body'>
          <Link to='/' className='login--btn'>Login</Link>
        </div>
        <div className='small--body'>
          <small>or continue with</small>
        </div>
        <div className='login--logos'>
          <FcGoogle fontSize="3.3em" />
          <BsFacebook color='#1877F2' fontSize="3em" />
          <AiFillTwitterCircle color='#55ACEE' fontSize="3.5em" />
        </div>
        <div className='login--bottom'>
          <p>Don't have an account? <span className='login--Signup'>Signup</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
