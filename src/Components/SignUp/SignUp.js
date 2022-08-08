import React, {useState} from 'react'
import './SignUp.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../Custom Button/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils'
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState({
    displayName: "",
    email: "",
    password: "",
    confirm_password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setUsers(users => (
      {
        ...users,
        [name]: value
      }
    ))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirm_password} = users
    if(password !== confirm_password){
      console.log("Passwords dont match")
      return
    }try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password)

        await createUserProfileDocument(user, {displayName})

        setUsers({
          displayName: '',
          email: '',
          password: '',
          confirm_password: ''
        })
        navigate("/")
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className='sign-up'>
        <h2 className='title'>Don't have an Account?</h2>
        <span>Sign up Here</span>
        <form onSubmit={handleSubmit}>
            <FormInput name ="displayName" type="text" onChange={handleChange} value={users.displayName} label="Full Name" required/>
            <FormInput name ="email" type="email" onChange={handleChange} value={users.email} label="Email" required />
            <FormInput name ="password" type="password" onChange={handleChange} value={users.password} label="Password" required />
            <FormInput name ="confirm_password" type="password" onChange={handleChange} value={users.confirm_password} label="Confirm Password" required />
            <CustomButton type="submit">Sign Up</CustomButton>
        </form>
    </div>
  )
}

export default SignUp