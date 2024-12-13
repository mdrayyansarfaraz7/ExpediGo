import React, { useState } from 'react';
import { PiAirplaneTakeoff } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
    let [mobView, setMobview] = useState(false);

    const HandelMobileView = () => {
        setMobview(!mobView);
    }

    return (
        <>
            {/* Sticky NavBar */}
            <div className='w-full h-24 p-10 bg-white flex items-center justify-between lg:px-24 sticky top-0 z-30 shadow-md'>
                <div>
                    <h4 className='font-poppins text-black flex gap-2 items-center cursor-pointer'>
                        <PiAirplaneTakeoff className='text-xl' /> ExpediGo Holidays
                    </h4>
                </div>

                <div className='hidden md:flex lg:flex gap-8 items-center justify-center'>
                    <p className='text-sm md:text-sm lg:text-lg font-poppins cursor-pointer'>India</p>
                    <p className='text-sm md:text-sm lg:text-lg font-poppins cursor-pointer'>International</p>
                    <p className='text-sm md:text-sm lg:text-lg font-poppins cursor-pointer'>Packages</p>
                    <p className='text-sm md:text-sm lg:text-lg font-poppins cursor-pointer'>About Us</p>
                    <p className='text-sm md:text-sm lg:text-lg font-poppins cursor-pointer'>Contact Us</p>
                </div>

                <div className='hidden md:flex lg:flex'>
                    <button className='border-none bg-blue-600 rounded-md p-2 lg:p-3 duration-700 font-light text-white hover:shadow-2xl hover:shadow-sky-200'>
                        Call Now
                    </button>
                </div>

                {
                    !mobView ?
                        <IoIosMenu className='text-2xl md:hidden lg:hidden' onClick={HandelMobileView} />
                        :
                        <RxCross2 className='text-2xl text-slate-800 md:hidden lg:hidden' onClick={HandelMobileView} />
                }
            </div>

            {/* Mobile NavBar */}
            <div className={`absolute top-20 w-full z-20 bg-white transition-all duration-500 ease-in-out ${mobView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <ul className='flex flex-col gap-4 items-center list-none p-6'>
                    <p className='text-lg font-poppins'>India</p>
                    <hr className='w-full border-t-1 border-gray-200' />
                    <p className='text-lg font-poppins'>International</p>
                    <hr className='w-full border-t-1 border-gray-200' />
                    <p className='text-lg font-poppins'>Packages</p>
                    <hr className='w-full border-t-1 border-gray-200' />
                    <p className='text-lg font-poppins'>About Us</p>
                    <hr className='w-full border-t-1 border-gray-200' />
                    <p className='text-lg font-poppins'>Contact Us</p>
                    <hr className='w-full border-t-1 border-gray-200' />
                </ul>
            </div>
        </>
    );
}

export default NavBar;
