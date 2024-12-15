import React from 'react'
import Btn from './Btn';
import Card from './Card';

function ExploreInternational() {

    let ExploreData = [{
        destination: "Bhutan",
        url: "/bhutan.avif",
        price: 9999
    },
    {
        destination: "Dubai",
        url: "/Dubai.jpg",
        price: 12999
    },
    {
        destination: "Vietnam",
        url: "/vietnam.jpeg",
        price: 8999
    },
    {
        destination: "Thailand",
        url: "/Thailand.avif",
        price: 9999
    }];

    return (

                <>
                        <div className='px-8 py-3 mt-5'>
            <div className='p-10 flex flex-col md:flex-row lg:flex-row gap-5 md:gap-2 items-center'>
                <div>
                    <h1 className=' font-inter text-5xl font-semibold text-center md:text-left lg:text-left'>
                    Explore Top Destinations
                    </h1>
                    <p className='mt-10 font-inter text-slate-600 text-lg w-[95%] md:w-[75%] lg:[w-75%] text-center md:text-left lg:text-left'>
                    Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
                    </p>
                </div>
                <Btn />
            </div>
        </div>
        <div className="flex flex-wrap gap-12 justify-center ">
        {ExploreData.map((item, index) => (
        <Card key={index} destination={item.destination} url={item.url} price={item.price}/>
      ))}
        </div>
                
                </>
    )
}

export default ExploreInternational