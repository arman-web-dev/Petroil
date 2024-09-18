import React from 'react';
import Sec1 from '../../assets/service1.png';
import Sec2 from '../../assets/service2.png';
import Sec3 from '../../assets/service3.png';

const Service = () => {
    return (
        <section className="py-[30px] flex flex-wrap items-center gap-3 lg:gap-0">

            <div className="container lg:w-1/2 w-full text-center lg:text-left">
                <h3 className="text-2xl font-bold">Our Services</h3>
                <p className="mt-4">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>

            <div className="lg:w-1/2 w-full relative before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:opacity-60">
                <img src={Sec1} alt="section image" className="w-full " />
                <div className="absolute inset-0 flex justify-center items-center flex-col text-white">
                    <h4 className="font-pops font-bold lg:text-[32px] sm:text-[24px] text-[18px]">
                        Modern natural oil and gas refineries.
                    </h4>
                    <button className="text-[12px] lg:text-[16px] uppercase px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[#f40404] text-white mt-4 sm:mt-6 lg:mt-8  hover:bg-[#d30303] transition-all duration-300 ease-in-out">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="lg:w-1/2 w-full relative before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:opacity-60">
                <img src={Sec2} alt="section image" className="w-full" />
                <div className="absolute inset-0 flex justify-center items-center flex-col text-white">
                    <h4 className="font-pops font-bold lg:text-[32px] sm:text-[24px] text-[18px]">
                        Supply of national industries.
                    </h4>
                    <button className="text-[12px] lg:text-[16px] uppercase px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[#f40404] text-white mt-4 sm:mt-6 lg:mt-8  hover:bg-[#d30303] transition-all duration-300 ease-in-out">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="lg:w-1/2 w-full relative before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:opacity-60">
                <img src={Sec3} alt="section image" className="w-full" />
                <div className="absolute inset-0 flex justify-center items-center flex-col text-white">
                    <h4 className="font-pops font-bold lg:text-[32px] sm:text-[24px] text-[18px]">
                        National fuel distribution and supply.
                    </h4>
                    <button className="text-[12px] lg:text-[16px] uppercase px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[#f40404] text-white mt-4 sm:mt-6 lg:mt-8  hover:bg-[#d30303] transition-all duration-300 ease-in-out">
                        Learn More
                    </button>
                </div>
            </div>



        </section>
    );
};

export default Service;
