import React from 'react'
import Btn from './Btn'
import Token from './Token'

function Customised() {
    let Packages = [{
        destination: "Kolkata",
        url: "/Kolkata.jpg",
        packages:6,
    },
    {
        destination: "Sundarban ",
        url: "/Sundarbuns.jpg",
        packages: 9
    },
    {
        destination: "North-East India",
        url: "/North East.jpg",
        packages: 8
    },
    {
        destination: "Guwahati, Assam",
        url: "/gawhati.jpg",
        packages: 6
    },
    {
        destination: "Darjeeling",
        url: "/Darjeeling.jpg",
        packages:6,
    },
    {
        destination: "Sikkim",
        url: "/Sikkim.jpg",
        packages: 9
    },
    {
        destination: "North/South Goa",
        url: "/Goa.jpg",
        packages: 6
    },
    {
        destination: "Shantiniketan",
        url: "/shantinekitan.jpg",
        packages: 6
    }];

    return (
        <>
            <div className='px-8 py-3 mt-5'>
                <div className='p-10 flex flex-col md:flex-row lg:flex-row gap-5 md:gap-2 items-center justify-between'>
                    <div>
                        <h1 className=' font-inter text-5xl font-semibold text-center md:text-left lg:text-left'>
                            Explore Customized Packages
                        </h1>
                    </div>
                    <Btn />
                </div>
            </div>
            
            <div className="
    grid 
    grid-cols-1 gap-2 
    sm:grid-cols-2 sm:gap-2
    md:grid-cols-3 md:gap-3 
    lg:grid-cols-4 lg:gap-4 
    xl:grid-cols-4 xl:gap-5 
    2xl:grid-cols-4 2xl:gap-5
    pl-16
">
        { Packages.map((item, index) => (
        <Token key={index} destination={item.destination} url={item.url} packages={item.packages}/>
      ))}
            </div>
            
        </>


    )
}

export default Customised