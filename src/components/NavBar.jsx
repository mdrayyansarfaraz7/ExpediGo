import  { useEffect, useState } from 'react';
import { PiAirplaneTakeoff } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom"; 

function NavBar() {
    let [mobView, setMobview] = useState(false);

    const HandelMobileView = () => {
        setMobview(!mobView);
    };
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
          const targetElement = document.getElementById(hash.slice(1));
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, [hash]);

    return (
        <>
            {/* Sticky NavBar */}
            <div className="w-full h-24 p-10 bg-white flex items-center justify-between lg:px-24 sticky top-0 z-30">
                <div>
                    <Link to="/" className="font-inter text-black flex gap-2 items-center cursor-pointer font-semibold">
                        <PiAirplaneTakeoff className="text-xl" /> ExpediGo Holidays
                    </Link>
                </div>

                <div className="hidden md:flex lg:flex gap-8 items-center justify-center">
                    <Link to="/#india" className="text-sm md:text-sm lg:text-lg font-inter font-medium cursor-pointer">
                        India
                    </Link>
                    <Link to="/#international" className="text-sm md:text-sm lg:text-lg font-inter font-medium cursor-pointer">
                        International
                    </Link>
                    <Link to="/#packages" className="text-sm md:text-sm lg:text-lg font-inter font-medium cursor-pointer">
                        Packages
                    </Link>
                    <Link to="/AboutUs" className="text-sm md:text-sm lg:text-lg font-inter font-medium cursor-pointer">
                        About Us
                    </Link>
                    <Link to="/ContactUs" className="text-sm md:text-sm lg:text-lg font-inter font-medium cursor-pointer">
                        Contact Us
                    </Link>
                </div>

                <div className="hidden md:flex lg:flex">
                    <Link to="/call-now">
                        <button className="border-none bg-blue-600 rounded-md p-2 lg:p-3 duration-700 font-normal text-white hover:shadow-2xl hover:shadow-sky-200">
                            Call Now
                        </button>
                    </Link>
                </div>

                {!mobView ? (
                    <IoIosMenu className="text-2xl md:hidden lg:hidden" onClick={HandelMobileView} />
                ) : (
                    <RxCross2 className="text-2xl text-slate-800 md:hidden lg:hidden" onClick={HandelMobileView} />
                )}
            </div>

            {/* Mobile NavBar */}
            <div
                className={`absolute top-20 w-full z-20 bg-white transition-all duration-500 ease-in-out ${
                    mobView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-4 items-center list-none p-6 ">
                    <Link to="/#india" className="text-lg font-inter font-medium">
                        India
                    </Link>
                    <hr className="w-full border-t-1 border-gray-200" />
                    <Link to="/#international" className="text-lg font-inter font-medium">
                        International
                    </Link>
                    <hr className="w-full border-t-1 border-gray-200" />
                    <Link to="/#packages" className="text-lg font-inter font-medium">
                        Packages
                    </Link>
                    <hr className="w-full border-t-1 border-gray-200" />
                    <Link to="/AboutUs" className="text-lg font-inter font-medium">
                        About Us
                    </Link>
                    <hr className="w-full border-t-1 border-gray-200" />
                    <Link to="/ContactUs" className="text-lg font-inter font-medium">
                        Contact Us
                    </Link>
                    <hr className="w-full border-t-1 border-gray-200" />
                </ul>
            </div>
        </>
    );
}

export default NavBar;
