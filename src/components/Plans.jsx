import React from 'react'
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

function Plans() {
  return (
    <div className='py-[100px] px-2 bg-[#579c8a]'>

        <div className="max-w-[1240px]  mx-auto md:grid grid-cols-3 gap-5">
            <div className=' bg-[#acddce] shadow-xl h-[500px] my-4 mt-[-15rem] hover:scale-105 duration-500 rounded-3xl'>

          <img className='w-20 mx-auto mt-[-3rem]' src={single} alt="" />

          <h2 className='font-bold text-2xl text-center py-8'>Web Development</h2>

            <h2 className='text-center text-4xl font-bold py-5'>$149</h2>

            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mp-8'> Lorem ipsum dolor sit.</p>
              <p className='py-2 border-b mx-8 mp-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! </p>
              <p className='py-2 border-b mx-8 mp-8'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-[#077b8a] my-5 p-3 rounded text-white font-bold hover:scale-105 duration-500'>Start Trial</button>
            </div>




            </div>





            <div className='shadow-xl h-[500px] mt-[-15rem] my-4 bg-[#6c9d8e] rounded-3xl hover:scale-105 duration-500 '>
          <img className='w-20 mx-auto mt-[-3rem]' src={double} alt="" />


          <h2 className='font-bold text-2xl text-center py-8'>Digital Marketing</h2>

            <h2 className='text-center text-4xl font-bold py-5'>$149</h2>

            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mp-8'> Lorem ipsum dolor sit.</p>
              <p className='py-2 border-b mx-8 mp-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! </p>
              <p className='py-2 border-b mx-8 mp-8'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-[#0b434c] my-5 p-3 rounded text-white font-bold hover:scale-105 duration-500'>Start Trial</button>
            </div>

            </div>

            <div className='bg-[#acddce] shadow-xl mt-[-15rem] h-[500px] my-4 hover:scale-105 duration-500 rounded-3xl'>
          <img className='w-20 mx-auto mt-[-3rem] ' src={triple} alt="" />


          <h2 className='font-bold text-2xl text-center py-8'>App Development</h2>

            <h2 className='text-center text-4xl font-bold py-5'>$149</h2>

            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mp-8'> Lorem ipsum dolor sit.</p>
              <p className='py-2 border-b mx-8 mp-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! </p>
              <p className='py-2 border-b mx-8 mp-8'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-[#077b8a] my-5 p-3 rounded text-white font-bold hover:scale-105 duration-500'>Start Trial</button>
            </div>

            </div>
        </div>
      
    </div>
  )
}

export default Plans
