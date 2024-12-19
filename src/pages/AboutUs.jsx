import React from 'react';

function AboutUs() {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
        <div className='w-full md:w-[550px] text-center lg:text-left xl:text-left 2xl:text-left'>
          <h1 className='font-inter text-5xl font-bold px-5'>About Us</h1>
          <p className='font-Montserrat text-lg text-slate-700 mt-5 text-justify lg:text-left xl:text-left 2xl:text-left  px-5'>
            "At ExpediGo, we believe traveling should be about exploring, relaxing, and making memories—not
            stressing over itineraries and logistics. Our mission is to simplify your travel experience by
            taking care of every detail, from booking your tickets to crafting personalized itineraries.
            All you need to do is pack your bags and immerse yourself in the journey. With ExpediGo, travel
            becomes truly hassle-free."
          </p>
        </div>
        {/* Collage hidden on sm and md screens */}
        <div className='hidden lg:flex justify-center items-center gap-2 px-8 py-10'>
          <img src="/R1.jpg" alt="" className='w-[300px] h-[420px] rounded-md' />
          <div className='flex flex-col justify-center items-center gap-2'>
            <img src="/R2.jpg" alt="" className='h-[200px] w-[300px] rounded-md' />
            <img src="/R3.jpg" alt="" className='h-[200px] w-[300px] rounded-md' />
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
        <div className='flex justify-center items-center gap-10 px-8 py-10'>
          <img
            src="/S1.jpg"
            alt=""
            className='w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full mx-10 shadow-lg'
          />
        </div>
        <div className='w-full md:w-[550px] text-center lg:text-left xl:text-left 2xl:text-left'>
          <h1 className='font-inter text-5xl font-bold px-5'>Our Story</h1>
          <p className='font-Montserrat text-lg text-slate-700 my-5 px-5 text-justify lg:text-left xl:text-left 2xl:text-left'>
            Our journey began with a simple idea: traveling should be an adventure, not a hassle. At ExpediGo, we’re dedicated to making your travel experience seamless and stress-free. We understand that planning every detail of a trip can be overwhelming, and that’s why we’re here to take the burden off your shoulders.

            With our expertise and personalized approach, we craft tailored itineraries that cater to your unique preferences, ensuring your journey is smooth from start to finish. Whether it’s a weekend getaway, a family vacation, or a solo exploration, we’ve got you covered.

            At ExpediGo, all you need to do is pack your bags—and leave the planning to us. Let us handle the logistics so you can focus on creating unforgettable memories. Your dream trip is just a step away.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
