import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

     const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userData, setUserData] = useState({})
    
      const submitHandler = (e) =>{
        e.preventDefault()
        setUserData({
          userName:{
            firstName:firstName,
            lastName:lastName
          },
          email:email,
          password:password
        })
    
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
                 <h3 className='text-base font-medium mb-2'>What's our Captain's name</h3>
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
                 
                 <h3 className='text-base font-medium mb-2'>What's our Captain's email</h3>
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
                 <button className='bg-[#111] text-white mb-3 rounded px-4 py-2  w-full text-base'>Login</button>

                
        </form> 
        <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
         </div>

         <div>
            <p className='text-[10px] text-gray-600'>By continuing, you agree to calls, including by autodialer, WhatsApp, or texts from Uber and its affiliates.</p>
         </div>
    </div>
  ) 
}

export default CaptainSignup