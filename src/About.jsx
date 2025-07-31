import React from 'react'

export default function About() {
  return <>
      <div className="bg-[#1abc9c] w-full h-screen flex justify-center items-center flex-col text-white">
          <div className="title">
              <h2 className='text-4xl font-bold uppercase'>about component</h2>
          </div>
          <div className="design flex justify-center items-center gap-4 my-4">
              <div className='h-1 w-20 bg-white'></div>
              <i className='fa-solid fa-star text-white'></i>
              <div className='h-1 w-20 bg-white'></div>
          </div>
          <div className='flex flex-col w-3/4 md:flex-row justify-center items-center lg:w-6xl gap-6 text-start'>
            <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
  
      </div>
    </>
}
