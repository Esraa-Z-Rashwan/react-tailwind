import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
 const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`z-40 fixed top-0 left-0 right-0 bg-[#2C3D4F] text-white uppercase transition-all duration-300 ${scrolled ? 'py-6' : 'py-9'}`}>
        <div className="container mx-auto px-4 sm:px-8 lg:px-0">
           <div className="flex justify-between items-center">
             <h2 className='text-3xl font-bold'><Link to={'/'}>Start Framework</Link></h2>
            <div className="links">
                <ul className='hidden lg:flex gap-6 font-bold'>
                    <li><NavLink to={'/about'}  className={({ isActive }) => isActive ? 'bg-[#1abc9c] px-2 py-2.5 rounded' : ''}>About</NavLink></li>
                    <li><NavLink to={'/portfolio'} className={({ isActive }) => isActive ? 'bg-[#1abc9c] px-2 py-2.5 rounded' : ''}>Portfolio</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? 'bg-[#1abc9c] px-2 py-2.5 rounded' : ''}>Contact</NavLink></li>
                </ul>
                <div onClick={()=> setMenu(!menu)} className="lg:hidden cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                
            </div>
           </div>
           {menu ? <ul className='space-y-6 mt-6 font-bold transition-all duration-300 ease-in-out lg:hidden'>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                </ul> : ''}
           
        </div>
    </nav>
  )
}
