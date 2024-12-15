import React from 'react'

function Advertisement() {
  return (
    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-8 mt-20 pb-8'>
        <div className='bg-amber-400 px-3 w-[300px] sm:w-[400px] md:w-[570px] lg:w-[500px] xl:w-[570px] 2xl:w-[570px] h-[424px] rounded-md'>
            <h1 className='text-4xl font-inter font-semibold pl-2 pr-10 mt-4'>
            Grab up to <span className='font-inter font-bold text-red-900'> 35% off </span> on your favorite destinations
            </h1>
            <p className='text-sm text-slate-900 p-2 font-inter'>Book any package from 10th Nov to 10 Dec and get flat INR 1000 off on flight booking</p>
            <div className='flex justify-center items-center'>
            <button className='w-[500px] h-[48px] bg-white text-sm font-inter font-light mt-48 p-2'>
                Call now
            </button>
            </div>

        </div>
        <div className='px-4'>
            <div className='flex justify-center items-center gap-4 flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
                <img src="/g1.jpg" alt="" className='w-[318px] h-[200px] rounded-md'/>
                <img src="/g2.jpg" alt="" className='w-[318px] h-[200px] rounded-md'/>

            </div>
            <div className='flex justify-center items-center gap-4 mt-4 flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
            <img src="/g3.webp" alt="" className='w-[318px] h-[200px] rounded-md'/>
            <img src="/g4.jpg" alt=""  className='w-[318px] h-[200px] rounded-md'/>
            </div>
        </div>
    </div>
  )
}

export default Advertisement