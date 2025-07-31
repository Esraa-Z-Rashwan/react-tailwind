import React from 'react'
import boy from './assets/imgi_1_avataaars.svg'

export default function Home() {
  return <>
    <div className="bg-[#1abc9c] w-full h-screen flex justify-center items-center flex-col text-white">
        <div className="w:1/2 lg:w-1/5 p-4 mb-4">
            <img src={boy} className="w-full" alt="Boy" />
        </div>
        <div className="title">
            <h2 className='text-4xl font-bold uppercase'>start Framework</h2>
        </div>
        <div className="design flex justify-center items-center gap-4 my-4">
            <div className='h-1 w-20 bg-white'></div>
            <i className='fa-solid fa-star text-white'></i>
            <div className='h-1 w-20 bg-white'></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>

    </div>
  </>
}
