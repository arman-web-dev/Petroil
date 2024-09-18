import React from 'react'
import Brand1 from '../../assets/brand1.png'
import Brand2 from '../../assets/brand2.png'
import Brand3 from '../../assets/brand3.png'
import Brand4 from '../../assets/brand4.png'


const Brand = () => {
  return (
    <section className='lg:py-[117px] py-[50px]'>
        <div className="container mx-auto flex justify-between">
            <div className="w-[24%]">
                <img src={Brand1} alt="brand" className='w-full'/>
            </div>
            <div className="w-[24%]">
                <img src={Brand2} alt="brand" className='w-full'/>
            </div>
            <div className="w-[24%]">
                <img src={Brand3} alt="brand" className='w-full'/>
            </div>
            <div className="w-[24%]">
                <img src={Brand4} alt="brand" className='w-full'/>
            </div>
           
        </div>
      
    </section>
  )
}

export default Brand
