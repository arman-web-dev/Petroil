import React from 'react'
import Car from '../../assets/car.png'
import Boat from '../../assets/boat.png'
import Garage from '../../assets/garage.png'
import Pipe from '../../assets/pipe.png'

const Image = () => {
  return (
    <div className="flex justify-between gap-x-3 overflow-hidden flex-wrap gap-2">
      <img src={Car} alt="Car Image" className="lg:w-[24%] w-full"/>
      <img src={Boat} alt="Boat Image" className="lg:w-[24%] w-full"/>
      <img src={Garage} alt="Garage Image" className="lg:w-[24%] w-full"/>
      <img src={Pipe} alt="Pipe Image" className="lg:w-[24%] w-full"/>
    </div>
  )
}

export default Image
