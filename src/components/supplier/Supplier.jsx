import React from 'react';

const Supplier = () => {
    return (
        <div className='py-[100px]'>
            <div className="container mx-auto flex flex-col lg:flex-row items-center"> 
                <div className="w-full lg:w-[27%] mb-6 lg:mb-0">
                    <h3 className='text-[36px] lg:text-[48px] font-pops font-bold w-full lg:w-[80%] text-center lg:text-left'>
                        The biggest supplier in the country
                    </h3>
                </div>
                <div className="w-full lg:w-[50%]"> {/* Changed w-[50%] to w-full for small screens and lg:w-[50%] for large screens */}
                    <p className='text-center lg:text-left'> {/* Added text-center for small screens */}
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Supplier;
