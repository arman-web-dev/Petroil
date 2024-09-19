import React from 'react'

const Contact = () => {
  return (
    <section className='bg-[#f40404] py-[45px] border-b-2 border-b-[#FFB800]'>
      <div className="container mx-auto flex lg:flex-row flex-col lg:items-center lg:justify-around lg:text-left text-center">
        <div className="">
            <h3 className='font-pops font-bold lg:text-[36px] text-white'>Want to join as member branch in your area?</h3>
        </div>
        <div className="">
            <button className='font-pops font-semibold text-[16px] text-white px-[31px] py-[13px] border-[1px] mt-[20px] lg:mt-0'>Contact</button>
        </div>
      </div>
    </section>
  )
}

export default Contact
