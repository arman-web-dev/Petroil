import React from 'react';
import Cart1 from '../../assets/cart1.png';
import Cart2 from '../../assets/cart2.png';
import Cart3 from '../../assets/cart3.png';

const Cart = () => {
  return (
    <section className="py-[60px] lg:py-[110px] bg-[#F0F0F0]">
      <div className="container mx-auto flex justify-between flex-col lg:flex-row gap-[15px] lg:gap-0">
        {/* Cart 1 */}
        <div className="lg:w-[32%] w-full relative before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:opacity-60">
          <img src={Cart1} alt="cart img" className="w-full" />
          <div className="absolute inset-0 p-6 sm:p-8 md:p-12 lg:py-[75px] lg:px-[45px] py-[100px] text-center lg:text-left font-pops font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-white">
            <h3>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
            <button className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] uppercase px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[#f40404] text-white mt-4 sm:mt-6 lg:mt-[80px] hover:bg-[#d30303] transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>

        {/* Cart 2 */}
        <div className="lg:w-[32%] w-full relative before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:opacity-60">
          <img src={Cart2} alt="cart img" className="w-full" />
          <div className="absolute inset-0 p-6 sm:p-8 md:p-12 lg:py-[75px] lg:px-[45px] py-[100px] text-center lg:text-left font-pops font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-white">
            <h3>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
            <button className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] uppercase px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[#f40404] text-white mt-4 sm:mt-6 lg:mt-[80px] hover:bg-[#d30303] transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>

        {/* Cart 3 */}
        <div className="lg:w-[32%] w-full relative before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:opacity-60">
          <img src={Cart3} alt="cart img" className="w-full" />
          <div className="absolute inset-0 p-6 sm:p-8 md:p-12 lg:py-[75px] lg:px-[45px] py-[100px] text-center lg:text-left font-pops font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-white">
            <h3>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
            <button className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] uppercase px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[#f40404] text-white mt-4 sm:mt-6 lg:mt-[80px] hover:bg-[#d30303] transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
