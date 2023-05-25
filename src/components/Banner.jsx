import React from 'react'
import Typed from "react-typed"

function Banner() {
  return (
    <div className='bg-[#a2d5c6] w-full py-[100px] text-center' >
        <div className='max-w-[1240px] py-[100px]  mx-auto text-center font-bold '>
        <div className='text-xl md:text-3xl md:p-[24px] text-[#077b8a] ' >
            Learn with us
        </div>
        <div className='text-5xl md:text-[80px] md:p-[24px]  text-[#077b8a]'>Grow with us.</div>
        <div className='text-[20px] md:text-[50px] md:p-[24px]  text-[#077b8a] font-bold '>
            Learn
            <Typed
            className='pl-3 text-[#1a4c5d]'
            strings={["Web Development","Digital Marketing","Ethical Hacking"]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
            />
        </div>
        <button className="bg-[#077b8a] hover:scale-105 duration-500 shadow-2xl text-white p-3 rounded">Get started</button>
        </div>
      
    </div>
  )
}

export default Banner
