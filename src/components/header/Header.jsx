import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { TbMailCancel } from "react-icons/tb";
import { MdWifiCalling3 } from "react-icons/md";


const Header = () => {
    return (
        <header className='bg-[#282828] py-4 border-b-[2px] border-b-[#FFB800]'>
            <div className='container mx-auto'>
                <div className=" flex items-center text-white flex-wrap">
                    <div className="w-full lg:w-1/4 flex items-center text-white gap-x-2 justify-center lg:justify-start">
                    <TbMailCancel />
                        <p className='lg:text-[#fff] text-[red] text-[12px] font-pops font-normal'>mail@yourcompany.com</p>
                    </div>
                    <div className="w-full lg:w-1/4 flex items-center text-white gap-x-2 justify-center lg:justify-start py-2 lg:py-0">
                    <MdWifiCalling3 />
                        <p className='text-white text-[12px] font-pops font-normal'>+896 120 5889 (Toll free)</p>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center gap-x-3 lg:justify-end justify-center">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaInstagram />
                    </div>

                </div>
            </div>


        </header>
    )
}

export default Header
