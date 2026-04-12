import React, { useState, useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})
  
  const {user , setUser} = React.useContext(UserDataContext)

  const navigate = useNavigate()

  const submitHandler = async(e) =>{
    e.preventDefault()
    const newUser = ({
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status === 201){
      const data = response.data

      setUser(data.user)

      navigate('/home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen justify-between flex flex-col'>
         <div>
            <img className='w-16 mb-10' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
        <form  onSubmit={(e)=>{
          submitHandler(e)
          }}>
                 <h3 className='text-base font-medium mb-2'>What's your name</h3>
                 <div className='flex gap-4 mb-5'>
                  <input 
                 required
                 className='bg-[#eeeeee]  rounded px-4 py-2 outline-none w-full text-base placeholder:text-sm' 
                 type="text"
                 placeholder='Firstname'
                 value={firstName}
                 onChange={(e)=>{
                  setFirstName(e.target.value)
                 }}
                 />

                 <input 
                 required
                 className='bg-[#eeeeee]  rounded px-4 py-2 outline-none w-full text-base placeholder:text-sm' 
                 type="text"
                 placeholder='Lastname'
                 value={lastName}
                 onChange={(e)=>{
                  setLastName(e.target.value)
                 }}
                 />

                 </div>
                 
                 <h3 className='text-base font-medium mb-2'>What's your email</h3>
                 <input 
                 required
                 className='bg-[#eeeeee] mb-5 rounded px-4 py-2 outline-none w-full text-base placeholder:text-sm' 
                 type="email"
                 placeholder='email@example.com'
                 value={email}
                 onChange={(e)=>{
                  setEmail(e.target.value)
                 }}
                 />

                 <h3 className='text-base font-medium mb-2' >Enter your password</h3>
                 <input
                 className='bg-[#eeeeee] mb-5 rounded px-4 py-2 outline-none w-full text-base placeholder:text-sm' 
                 required 
                 type="password" 
                 placeholder='Password'
                 value={password}
                 onChange={(e)=>{
                  setPassword(e.target.value)
                 }}
                 />
                 <button className='bg-[#111] text-white mb-3 rounded px-4 py-2  w-full text-base'>Create account</button>

                
        </form> 
        <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
         </div>

         <div>
            <p className='text-[10px] text-gray-600'>By continuing, you agree to calls, including by autodialer, WhatsApp, or texts from Uber and its affiliates.</p>
         </div>
    </div>
  )
}

export default UserSignup