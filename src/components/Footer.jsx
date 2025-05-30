import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear(); // Get current year for copyright

    return (
        <>
            <div className='w-full h-auto bg-amber-400'>
                <div className='flex flex-col items-center md:flex-row md:items-start md:justify-evenly gap-5 px-5 py-20'>
                    {/* Logo and Social Icons */}
                    <div className='flex flex-col items-center'>
                        <img src="/ExpediGo.png" className='w-[135px] h-[135px] rounded-full' />
                        <div className='flex items-center justify-evenly gap-2 mt-4'>
                            <p className="font-inter">Follow Us: </p> 
                            <Link to={'https://www.facebook.com/profile.php?id=61554390507137'}>
                                <FaFacebook className='text-lg' />
                            </Link>
                            <Link to={'https://www.instagram.com/expedigoholidays/'}>
                                <RiInstagramFill className='text-lg' />
                            </Link>
                        </div>
                    </div>

                    {/* Responsive Grid for Footer Links */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 cursor-pointer'>
                        {/* Our Destinations */}
                        <div className='flex flex-col'>
                            <h1 className='font-inter text-lg font-semibold'>Our Destinations</h1>
                            <ul className='list-none text-slate-900 mt-4'>
                                <Link to={'/call-now?location=Kolkata'}> <li>Kolkata</li></Link>
                                <Link to={'/call-now?location=Sikkim'}><li>Sikkim</li></Link>
                                <Link to={'/call-now?location=Goa'}><li>Goa</li></Link>
                                <Link to={'/call-now?location=Darjeeling'}><li>Darjeeling</li></Link>
                            </ul>
                        </div>

                        {/* Our Packages */}
                        <div className='flex flex-col cursor-pointer'>
                            <h1 className='font-inter text-lg font-semibold'>Our Packages</h1>
                            <ul className='list-none text-slate-900 mt-4'>
                                <Link to={'/call-now?category=Honeymoon'}><li>Honeymoon</li></Link>
                                <Link to={'/call-now?category=Family'}><li>Family</li></Link>
                                <Link to={'/call-now?category=Group'}><li>Group tour</li></Link>
                                <Link to={'/call-now?category=Solo'}> <li>Solo</li></Link>
                            </ul>
                        </div>

                        {/* About Us */}
                        <div className='flex flex-col'>
                            <h1 className='font-inter text-lg font-semibold cursor-pointer'>About Us</h1>
                            <ul className='list-none text-slate-900 mt-4'>
                                <Link to={'/AboutUs'}>
                                    <li>Our Story</li>
                                </Link>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className='flex flex-col cursor-pointer'>
                            <Link to={'/ContactUs'}>
                                <h1 className='font-inter text-lg font-semibold'>Contact Us</h1>
                            </Link>
                            <ul className='list-none text-slate-900 mt-4'>
                                <li>12/2 Action Area 1, Newtown</li>
                                <li>+91 9007016011</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Small Blue Footer with Copyright and Developer Info */}
            <div className='w-full bg-blue-600 py-2 text-white'>
                <div className='flex justify-between items-center px-2'>
                    <p className='text-center font-extralight font-inter'>
                        &copy; {currentYear} All rights reserved.
                    </p>
                    <p className='text-right'>
                        Developed By <span className='font-semibold'>Md Rayyan Sarfaraz</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;
