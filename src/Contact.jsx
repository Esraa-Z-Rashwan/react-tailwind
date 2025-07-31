import React from 'react'

export default function Contact() {
    const handleSubmit = (e) => {
  e.preventDefault();
};
  return <>
        <div className="w-full min-h-screen flex justify-center items-center flex-col text-[#2C3E50] mt-10 ">
            <div className="title">
                <h2 className='text-4xl font-bold uppercase'>conatct section</h2>
            </div>
            <div className="design flex justify-center items-center gap-4 my-4">
                <div className='h-1 w-20 bg-[#2C3E50]'></div>
                <i className='fa-solid fa-star text-[#2C3E50]'></i>
                <div className='h-1 w-20 bg-[#2C3E50]'></div>
            </div>
            <form onSubmit={handleSubmit} className='w-full md:w-3/4 lg:w-1/2 px-8 md:px-0'>
                <div className="relative my-15">
  <input type="text" id="userNameInput" placeholder=" "
    className="peer w-full border-0 border-b-1 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border--gray-500 rounded-xl ps-3 pb-3"
  />
  <label htmlFor="userNameInput" className="absolute left-4 -top-10 text-[#1ABC9C] text-sm transition-all 
  peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-10 peer-focus:text-sm peer-focus:text-[#1ABC9C]"
  >
    userName
  </label>
</div>

<div className="relative my-15">
  <input type="number" id="userAgeInput" placeholder=" "
    className="peer w-full border-0 border-b-1 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border--gray-500 rounded-xl ps-3 pb-3"
  />
  <label htmlFor="userAgeInput" className="absolute left-4 -top-10 text-[#1ABC9C] text-sm transition-all 
  peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-10 peer-focus:text-sm peer-focus:text-[#1ABC9C]"
  >
    userAge
  </label>
</div>

<div className="relative my-15">
  <input type="email" id="userEmailInput" placeholder=" "
    className="peer w-full border-0 border-b-1 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border--gray-500 rounded-xl ps-3 pb-3"
  />
  <label htmlFor="userEmailInput" className="absolute left-4 -top-10 text-[#1ABC9C] text-sm transition-all 
  peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-10 peer-focus:text-sm peer-focus:text-[#1ABC9C]"
  >
    userEmail
  </label>
</div>

<div className="relative mt-15 mb-7">
  <input type="password" id="userPasswordInput" placeholder=" "
    className="peer w-full border-0 border-b-1 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border--gray-500 rounded-xl ps-3 pb-3"
  />
  <label htmlFor="userPasswordInput" className="absolute left-4 -top-10 text-[#1ABC9C] text-sm transition-all 
  peer-placeholder-shown:-top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-10 peer-focus:text-sm peer-focus:text-[#1ABC9C]"
  >
    userPassword
  </label>
</div>

<button type='submit' className='bg-[#1ABC9C] text-white py-2 px-4 rounded cursor-pointer'>Send Message</button>
            </form>
        </div>
    </>
}
