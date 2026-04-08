import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div className='p-7 h-screen justify-between flex flex-col'>
         <div>
            <img className='w-16 mb-10' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
        <form  action="">
                 <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                 <input 
                 required
                 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 outline-none w-full text-lg placeholder:text-base' 
                 type="email"
                 placeholder='email@example.com'/>

                 <h3 className='text-lg font-medium mb-2' >Enter your password</h3>
                 <input
                 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 outline-none w-full text-lg placeholder:text-base' 
                 required 
                 type="password" 
                 placeholder='Password'/>
                 <button className='bg-[#111] text-white mb-3 rounded px-4 py-2  w-full text-lg'>Login</button>

                
        </form> 
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
         </div>

         <div>
            <button className='bg-green-400 text-white mb-7 rounded px-4 py-2  w-full text-lg'>Sign in as Captain</button>
         </div>
    </div>
  )
}

export default UserLogin