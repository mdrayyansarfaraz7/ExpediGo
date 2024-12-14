import React from 'react';

function Card({ destination,url,price }) {
  return (
    <div
      className="w-[300px] h-[420px] rounded-md bg-slate-600 bg-cover bg-center bg-blend-overlay"
      style={{ backgroundImage: `url(${url})` }}
    >
        <div>
            <div className='px-3 mt-[300px] flex justify-between items-center'>

                <div>
                    <h1 className='font-inter text-2xl text-white font-semibold'>{destination}</h1>
                    <p className='font-Montserrat text-sm text-white font-normal'>
                    Starting from
                    </p>
                </div>
                <h2 className='font-Montserrat font-semibold text-3xl text-white'>
                    INR {price}
                </h2>

            </div>
            <div className='flex justify-center items-center mt-2'>
            <button className='bg-blue-600 text-white font-inter text-sm font-light rounded-sm w-[248px] h-[48px] '>
                Enquire Now
            </button>
            </div>

        </div>
    </div>
  );
}

export default Card;
