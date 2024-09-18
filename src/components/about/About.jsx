import React from 'react'
import Road from '../../assets/road.png'

const About = () => {
    return (
        <section className='lg:py-[100px] py-[50px] bg-[#F0F0F0]'>
            <div className="container mx-auto flex flex-col lg:flex-row"> 
                <div className="bg-[red] w-full lg:w-[30%]"> 
                    <h3 className='font-pops font-bold lg:text-[36px] text-white py-10 lg:py-[100px] px-6 lg:px-[70px] text-center lg:text-left'>
                        Learn more about our company
                    </h3>
                </div>
                <div className="w-full lg:w-[70%] relative"> 
                    <img src={Road} alt="Road" className='w-full' />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="text-[10px] lg:text-[16px] uppercase px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[#f40404] text-white hover:bg-[#d30303] transition-all duration-300 ease-in-out">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
