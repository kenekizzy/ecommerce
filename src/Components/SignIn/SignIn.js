import React, { useState } from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput'
import { signInWithGoogle, auth} from '../../firebase/firebaseUtils'
import CustomButton from  '../Custom Button/CustomButton'

const SignIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser(user => (
            {
                ...user,
                [name]: value
            }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password} = user
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setUser({
                email: "",
                password: ""
            })
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className='sign-in'>
        <h2 className='title'>Have an Account?</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput name ="email" type="email" onChange={handleChange} value={user.email} label="Email" required />
            <FormInput name ="password" type="password" onChange={handleChange} value={user.password} label="Password" required />
            <div className='buttons'>
                <CustomButton  type="submit">Sign In</CustomButton>
                <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>Google SignIn</CustomButton>
            </div>
        </form>
    </div>
  )
}

export default SignIn