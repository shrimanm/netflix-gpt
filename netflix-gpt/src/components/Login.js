import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignin,setIsSignin] = useState(true);

  const toggleSigninAndSignup = () => {
    setIsSignin(!isSignin)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_small.jpg'
        alt='background image' className='z-10' />
      </div>
      <form className='w-3/12 absolute p-12 mt-36 mx-auto right-0 left-0 flex flex-col bg-black bg-opacity-80 rounded-md text-white'>
        <h1 className='text-white font-bold text-3xl p-2 my-3 mx-auto w-10/12'>{isSignin? "Sign In" : "Sign Up"}</h1>
        {
          !isSignin? <input type='text' placeholder='Full Name' className='p-3 my-3 w-10/12 mx-auto bg-gray-900 border-white'/> : ""
        }
        <input type='email' placeholder='Email Address' className='p-3 my-3 w-10/12 mx-auto bg-gray-900 border-white'/>
        <input type='password' placeholder='Password' className='p-3 my-3 w-10/12 mx-auto bg-gray-900 border-white'/>
        <button type='submit' className='bg-red-600 text-white rounded-md w-10/12 mx-auto p-3 my-3'>{isSignin ? "Sign In" : "Sign Up"}</button>
        <p className='text-white mx-auto w-10/12 p-2 m-2 cursor-pointer' onClick={toggleSigninAndSignup}>{isSignin? "Don't have an Account? Sign Up" : "Already Registered? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
