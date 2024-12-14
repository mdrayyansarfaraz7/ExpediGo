import React from 'react'
import { MdOutlineTurnRight } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaRegCalendar } from "react-icons/fa6";
import { TbMountainFilled } from "react-icons/tb";
function Hero() {
    return (
        <div className="w-full h-[95vh] bg-[url('/Hero.png')] bg-cover bg-center flex flex-col justify-center items-center ">
            <div className="w-[90%] md:w-[800px] text-center my-20 md:mt-24 mx-auto">
                <h1 className="text-white text-4xl md:text-6xl lg:text-6xl font-inter">
                    Pack your bags &#x26; leave the <span className="font-instrument italic">planning</span> to us ✌️
                </h1>
                <h3 className='text-sm md:text-base lg:text-xl font-extralight font-inter text-white my-10'>Travel hussle-free</h3>
            </div>
            <div className='bg-white rounded-md md:rounded-full lg:rounded-full w-[65%]  md:w-[75%] lg:w-[70%] h-auto md:h-20 lg:h-20 flex flex-col md:flex-row lg:flex-row  items-center justify-around gap-3 cursor-pointer py-3 px-7 md:px-5 md:py-2 lg:px-5 lg:py-2'>
                <div className='flex items-center justify-center gap-2'>
                    <div className='p-2 md:p-4 lg:p-4 rounded-full bg-amber-400'>
                        <ImLocation className='text-base md:text-2xl lg:text-2xl' />
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='text-black text-lg md:text-base lg:text-xl font-medium font-inter'>Where</h5>
                        <p className='text-slate-500 text-sm md:text-sm lg:text-base font-normal font-inter'>Search destination</p>
                    </div>

                </div>

                <div className='flex items-center justify-center gap-5 md:gap-2 lg:gap-2 '>
                    <div className='p-2 md:p-4 lg:p-4 rounded-full bg-amber-400'>
                        <FaRegCalendar className='text-base md:text-2xl lg:text-2xl' />
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='text-black text-lg md:text-base lg:text-xl font-medium font-inter'>When</h5>
                        <p className='text-slate-500 text-sm md:text-sm lg:text-base font-normal font-inter'>10th Feb - 15th Feb</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <div className='p-2 md:p-4 lg:p-4 rounded-full bg-amber-400'>
                        <TbMountainFilled className='text-base md:text-2xl lg:text-2xl' />
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='text-black text-lg md:text-base lg:text-xl font-medium font-inter'>Tour Type</h5>
                        <p className='text-slate-500 text-sm md:text-sm lg:text-base font-normal font-inter'>Packages / Custom</p>
                    </div>
                </div>
                <button className='border-none bg-blue-600 rounded-full 
                lg:px-6 lg:py-4 lg:text-base 
                md:px-5 md:py-3 md:text-sm 
                px-4 py-2 text-sm 
                duration-700 font-light text-white flex gap-2 items-center 
                hover:shadow-lg hover:shadow-sky-200'>
                    <MdOutlineTurnRight className='lg:text-2xl md:text-xl sm:text-lg font-thin' />
                    Enquire
                </button>
            </div>
        </div>
    )
}

export default Hero