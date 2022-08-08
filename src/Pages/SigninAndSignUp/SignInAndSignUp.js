import React from 'react'
import './SignInAndSignUp.scss'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'

const SignInAndSignUp = () => {
  return (
    <div className='signin-and-signup'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUp