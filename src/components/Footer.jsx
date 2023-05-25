import React from 'react'
import {AiFillInstagram, AiFillGithub, AiFillFacebook} from "react-icons/ai"
import Typed from "react-typed"

const Footer = () => {
  return (
    <div className='bg-[#43806f] h-[300px] grid grid-cols-3 '>

    <div className='border-r-4 border-black m-10' >
    <a href="https://instagram.com/kaju___saikia" ><AiFillInstagram size={40} className='float-left '/></a>

    <div>
      <h1 className='font-bold text-2xl text-center py-5 p-8'>Kaju___Saikia</h1>
      <p className='space-x-4'>This is my Instagram account </p>
      <h1 className='space-x-4'>Please follow this page.</h1>
      <div>
      <Typed
            className='pl-20 text-black  font-bold'
            strings={["Photos","Reels","Storys"]}
            typeSpeed={180}
            loop={true}
            backSpeed={100}
            />
      </div>
    </div>

    </div>
    <div className='border-r-4 m-10 border-black'>
    <a href="https://github.com/kaju111"><AiFillGithub size={40} className='float-left'/></a>
    
<div>
<h1 className='font-bold text-2xl text-center py-5 p-8'>Kaju111</h1>
      <p className='space-x-4'>This is my Github account </p>
      <h1 className='space-x-4'>Please follow this page.</h1>
      <Typed
            className='pl-20 text-black  font-bold'
            strings={["React-Code","Js-Code","SCSS-Code"]}
            typeSpeed={180}
            loop={true}
            backSpeed={100}
            />
</div>

    
    </div>
    <div className='m-10'>
    <a href="https://facebook.com/kaju"><AiFillFacebook size={40} className='float-left'/></a>

    <div>
<h1 className='font-bold text-2xl text-center py-5 p-8'>Ka ju</h1>
      <p className='space-x-4'>This is my Facebook account </p>
      <h1 className='space-x-4'>Please follow this page.</h1>
      <Typed
            className='pl-20 text-black  font-bold'
            strings={["Photos","Videos","Story"]}
            typeSpeed={180}
            loop={true}
            backSpeed={100}
            />
</div>


    </div>
      
    </div>
  )
}

export default Footer




