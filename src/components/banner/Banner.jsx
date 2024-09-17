import React from 'react';

const Banner = () => {
  return (
    <div className="bg-hero-pattern  w-full sm:w-full bg-fixed bg-center bg-cover bg-no-repeat relative before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:opacity-60">
      <div className=" sm:py-[50px] md:pb-[50px] lg:py-[200px] container mx-auto relative text-center lg:text-left">
        <h1 className='font-pops text-[34px] sm:text-[42px] md:text-[50px] lg:text-[64px] text-white z-40 w-[90%] md:w-[80%] lg:w-[70%] ml-[20px] lg:ml-0 pt-10 lg:pt-0'>
          We exist since 1975 in the oil and gas industry.
        </h1>
        <button className='uppercase px-4 py-2 sm:px-5 sm:py-3 bg-[#f40404] text-white mt-5 sm:mt-7 lg:mt-9 ml-[20px] lg:ml-0 mb-8 lg:mb-0 '>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;

{/* <div style={{ backgroundImage: `url(${Demo})` }} className='h-[100px] w-full'></div> alternative*/ }
