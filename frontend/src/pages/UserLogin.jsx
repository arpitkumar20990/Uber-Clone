import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) =>{
      e.preventDefault();
      setUserData({
        email: email,
        password: password
      })
      setEmail('');
      setPassword('');
  }

  return (
    <div className='p-7 h-screen justify-between flex flex-col'>
         <div>
            <img className='w-16 mb-10' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
        <form  onSubmit={(e)=>{
          submitHandler(e)
          }}>
                 <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                 <input 
                 required
                 value={email}
                 onChange={(e)=>{
                  setEmail(e.target.value)
                 }}
                 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 outline-none w-full text-lg placeholder:text-base' 
                 type="email"
                 placeholder='email@example.com'/>

                 <h3 className='text-lg font-medium mb-2' >Enter your password</h3>
                 <input
                 value={password}
                 onChange={(e)=>{
                  setPassword(e.target.value)
                 }}
                 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 outline-none w-full text-lg placeholder:text-base' 
                 required 
                 type="password" 
                 placeholder='Password'/>
                 <button className='bg-[#111] text-white mb-3 rounded px-4 py-2  w-full text-lg'>Login</button>

                
        </form> 
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
         </div>

         <div>
            <Link
            to='/captain-login' 
            className='bg-green-400 flex items-center justify-center text-white mb-5 rounded px-4 py-2  w-full text-lg'>Sign in as Captain</Link>
         </div>
    </div>
  )
}

export default UserLogin