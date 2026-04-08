import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1674395364266-76316bbc82fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D)] h-screen w-ful pt-8 flex justify-between flex-col bg-red-400'>
            <img className='w-18 ml-8' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
            <div className='bg-white pb-7 p-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black rounded text-white py-3 mt-6 cursor-pointer'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home