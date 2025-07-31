import React, { useState } from 'react'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'


export default function Portfolio() {
    
    const [selectedImage, setSelectedImage] = useState(false);

    const openLightbox = (img) => {
    setSelectedImage(img);
  };
    const closeLightbox = () => {
   setSelectedImage(false);
  };


  return <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col text-[#2C3E50] mt-20 pt-20 ">
          <div className="title">
              <h2 className='text-4xl font-bold uppercase text-center'>portfolio component</h2>
          </div>
          <div className="design flex justify-center items-center gap-4 my-4">
              <div className='h-1 w-20 bg-[#2C3E50]'></div>
              <i className='fa-solid fa-star text-[#2C3E50]'></i>
              <div className='h-1 w-20 bg-[#2C3E50]'></div>
          </div>

          <div className="images flex flex-wrap justify-center items-center px-10">

                <div className="img1 group w-full md:w-1/2 lg:w-1/3 pb-3 sm:p-7 rounded-2xl">
                   <div onClick={() => openLightbox(img1)} className="inner relative w-full ">
                     <img src={img1} className="w-full rounded-2xl" alt="Home" />
                    <div className='hoverLayout opacity-0 group-hover:opacity-100 group-hover:cursor-pointer rounded-2xl'>
                        <div className="icon"><i className="fa-solid fa-plus fa-6x text-white"></i></div>
                    </div>
                   </div>
                </div>


                <div className="img2 group w-full md:w-1/2 lg:w-1/3 pb-3 sm:p-7 rounded-2xl">
                     <div onClick={() => openLightbox(img2)} className="inner relative w-full ">
                     <img src={img2} className="w-full rounded-2xl" alt="Cake" />
                    <div className='hoverLayout opacity-0 group-hover:opacity-100 group-hover:cursor-pointer rounded-2xl'>
                        <div className="icon"><i className="fa-solid fa-plus fa-6x text-white"></i></div>
                    </div>
                   </div>
                </div>
                <div className="img3 group w-full md:w-1/2 lg:w-1/3 pb-3 sm:p-7  rounded-2xl">
                    <div onClick={() => openLightbox(img3)} className="inner relative w-full ">
                     <img src={img3} className="w-full rounded-2xl" alt="Circus" />
                    <div className='hoverLayout opacity-0 group-hover:opacity-100 group-hover:cursor-pointer rounded-2xl'>
                        <div className="icon"><i className="fa-solid fa-plus fa-6x text-white"></i></div>
                    </div>
                   </div>
                </div>
                 <div className="img1 group w-full md:w-1/2 lg:w-1/3 pb-3 sm:p-7 rounded-2xl">
                     <div onClick={() => openLightbox(img1)} className="inner relative w-full ">
                     <img src={img1} className="w-full rounded-2xl" alt="Home" />
                    <div className='hoverLayout opacity-0 group-hover:opacity-100 group-hover:cursor-pointer rounded-2xl'>
                        <div className="icon"><i className="fa-solid fa-plus fa-6x text-white"></i></div>
                    </div>
                   </div>
                </div>
                <div className="img2 group w-full md:w-1/2 lg:w-1/3 pb-3 sm:p-7 rounded-2xl">
                    <div onClick={() => openLightbox(img2)} className="inner relative w-full ">
                     <img src={img2} className="w-full rounded-2xl" alt="Cake" />
                    <div className='hoverLayout opacity-0 group-hover:opacity-100 group-hover:cursor-pointer rounded-2xl'>
                        <div className="icon"><i className="fa-solid fa-plus fa-6x text-white"></i></div>
                    </div>
                   </div>
                </div>
                <div className="img3 group w-full md:w-1/2 lg:w-1/3 pb-3 sm:p-7 rounded-2xl">
                    <div onClick={() => openLightbox(img3)} className="inner relative w-full ">
                     <img src={img3} className="w-full rounded-2xl" alt="Circus" />
                    <div className='hoverLayout opacity-0 group-hover:opacity-100 group-hover:cursor-pointer rounded-2xl'>
                        <div className="icon"><i className="fa-solid fa-plus fa-6x text-white"></i></div>
                    </div>
                   </div>
                </div>

                  
          
          </div>
        
  {selectedImage ? <div onClick={closeLightbox} className="lightboxOverlay fixed top-0 left-0 right-0 bottom-0 bg-black/80 flex justify-center items-center z-50 cursor-pointer">
  <img src={selectedImage} alt="Enlarged" className="w-3/4 md:w-1/2 rounded-lg" />
</div>
 : ''}
      </div>


    </>
}
