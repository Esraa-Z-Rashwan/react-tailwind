import React from 'react'

export default function Footer() {
  return <>
  <footer className='bg-[#2C3D4F] text-white pt-12'>
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start m-4">


          <div className="sm:w-1/3  mb-5 p-4">
            <div className="text-center">
              <h3 className='text-2xl font-semibold  mb-4'>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>


          <div className="sm:w-1/3 mb-5 p-4">
            <div className="text-center">
              <h3 className='text-2xl font-semibold mb-4'>AROUND THE WEB</h3>
              <div className="flex justify-center gap-2">
                <div className='flex justify-center items-center h-10 w-10 border border-white rounded-3xl'><i className=' fa-brands fa-facebook'></i></div>
                <div className='flex justify-center items-center h-10 w-10 border border-white rounded-3xl'><i className=' fa-brands fa-twitter'></i></div>
                <div className='flex justify-center items-center h-10 w-10 border border-white rounded-3xl'><i className=' fa-brands fa-linkedin-in'></i></div>
                <div className='flex justify-center items-center h-10 w-10 border border-white rounded-3xl'><i className='fa-solid fa-globe'></i></div>
              </div>
            </div>
          </div>


          <div className="sm:w-1/3 mb-5 p-4">
            <div className=" text-center">
              <h3 className='text-2xl font-semibold mb-4'>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
          </div>

        </div>


        
      </div>
      <div className='bg-[#1A252F] text-center py-4 mt-12'>
          <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
    </footer>
  </>
}
