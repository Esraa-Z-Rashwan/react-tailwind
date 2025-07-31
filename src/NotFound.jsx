import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return  <>
      <div className="bg-[#1abc9c] w-full h-screen flex justify-center items-center flex-col text-white">
          <h1 className='text-8xl font-bold '>404</h1>
          <h2 className='text-3xl font-bold mb-6'>Page Not Found</h2>
            <p className='mb-12'>Sorry, the page you are looking for does not exist.</p>
             <button><Link to={"/"} className="bg-white text-[#1abc9c] py-2 px-4 rounded">Go Home</Link></button>
      </div>
     
    </>
}
