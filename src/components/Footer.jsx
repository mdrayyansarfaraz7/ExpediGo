import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
    return (
        <div className='w-full h-auto bg-amber-400'>
            <div className='flex flex-col items-center md:flex-row md:items-start md:justify-evenly gap-5 px-5 py-20'>
                {/* Logo and Social Icons */}
                <div className='flex flex-col items-center'>
                    <img src="/ExpediGo.png" className='w-[135px] h-[135px] rounded-full' />
                    <div className='flex items-center justify-evenly gap-2 mt-4'>
                        <FaFacebook className='text-lg' />
                        <FaTwitter className='text-lg' />
                        <FaYoutube className='text-lg' />
                        <RiInstagramFill className='text-lg' />
                    </div>
                </div>

                {/* Responsive Grid for Footer Links */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 cursor-pointer'>
                    {/* Our Destinations */}
                    <div className='flex flex-col'>
                        <h1 className='font-inter text-lg font-semibold'>Our Destinations</h1>
                        <ul className='list-none text-slate-900 mt-4'>
                            <li>Kolkata</li>
                            <li>Sikkim</li>
                            <li>Goa</li>
                            <li>Darjeeling</li>
                        </ul>
                    </div>

                    {/* Our Packages */}
                    <div className='flex flex-col cursor-pointer'>
                        <h1 className='font-inter text-lg font-semibold'>Our Packages</h1>
                        <ul className='list-none text-slate-900 mt-4'>
                            <li>Honeymoon</li>
                            <li>Family</li>
                            <li>Group tour</li>
                            <li>Solo</li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div className='flex flex-col'>
                        <h1 className='font-inter text-lg font-semibold cursor-pointer'>About Us</h1>
                        <ul className='list-none text-slate-900 mt-4'>
                            <li>Our Story</li>
                            <li>Work with us</li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className='flex flex-col cursor-pointer'>
                        <h1 className='font-inter text-lg font-semibold'>Contact Us</h1>
                        <ul className='list-none text-slate-900 mt-4'>
                            <li>12/2 Action Area 1, Newtown</li>
                            <li>+91 89533 55781</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
