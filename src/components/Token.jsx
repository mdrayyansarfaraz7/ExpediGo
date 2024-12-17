import React from 'react';

function Token({ url, destination, packages }) {
  return (
    <div className='w-[270px] h-[90px] flex gap-3 justify-center items-center'>
      <img src={url} className='rounded-md w-[90px] h-[90px]' />
      <div className='h-[40px] w-[160px]'>
        <h3 className='text-base font-inter font-semibold'>{destination}</h3>
        <p className='font-Montserrat text-sm text-slate-600'>Packages: {packages}</p>
      </div>
    </div>
  );
}

export default Token;