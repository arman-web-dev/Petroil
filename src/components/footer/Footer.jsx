import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/logo-b.png';
import Img1 from '../../assets/Cert1.png';
import Img2 from '../../assets/Cert2.png';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
        
        {/* First Column: Logo & Contact Information */}
        <div>
          <img src={Logo} alt="Petroil Logo" className="mb-4 w-32 lg:w-40" />
          <ul className="space-y-2 text-sm">
            <li>mail@yourcompany.com</li>
            <li>+896 120 5889 (Toll Free)</li>
            <li>101 Baker Street, New York, USA, 12345</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#f40404]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#f40404]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#f40404]"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-[#f40404]"><FaInstagram /></a>
          </div>
        </div>

        {/* Second Column: Company Links */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#f40404]">Home</a></li>
            <li><a href="#" className="hover:text-[#f40404]">About</a></li>
            <li><a href="#" className="hover:text-[#f40404]">Services</a></li>
            <li><a href="#" className="hover:text-[#f40404]">Gallery</a></li>
          </ul>
        </div>

        {/* Third Column: Other Links */}
        <div>
          <h4 className="font-semibold mb-4">Others</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#f40404]">Blog</a></li>
            <li><a href="#" className="hover:text-[#f40404]">Contact</a></li>
            <li><a href="#" className="hover:text-[#f40404]">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#f40404]">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Fourth Column: Certificates */}
        <div>
          <h4 className="font-semibold mb-4">Certificates</h4>
          <div className="space-y-2">
            <img src={Img1} alt="ISO 88 Certification" className="w-24 md:w-28 lg:w-32" />
            <img src={Img2} alt="LiquidGreen Certification" className="w-24 md:w-28 lg:w-32" />
          </div>
        </div>

      </div>

      {/* Footer Bottom - Copyright Section */}
      <div className="border-t border-[#2e2e2e] mt-8 pt-4 text-center text-gray-400 text-sm">
        <p>© Copyright 2022 by AliDesign Studio – All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
