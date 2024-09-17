import React, { useState } from 'react'
import Logo from '../../assets/logo2.png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className='bg-[#F40404] lg:py-5 py-2'>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-1/4 pl-3 lg:pl-0">
            <img src={Logo} alt="logo" />
          </div>

          <div className="hidden lg:flex w-3/4 justify-end items-center">
            <ul className='flex flex-row gap-x-10 cursor-pointer'>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Home</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>About</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Service</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Gallery</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Blog</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Contact</li>
            </ul>
          </div>

          <div onClick={() => setShow(!show)} className="lg:hidden cursor-pointer text-white text-2xl pr-2">
            {show ? <RxCross1 /> : <FaBars />}
          </div>
        </div>

        {show && (
          <div className="lg:hidden">
            <ul className='flex flex-col items-center gap-y-4 py-4'>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Home</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>About</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Service</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Gallery</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Blog</li>
              <li className='text-white text-[16px] font-pops font-semibold hover:text-[#282828] duration-300 ease-in-out '>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar;
