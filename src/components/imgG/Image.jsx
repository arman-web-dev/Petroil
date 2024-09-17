import React from 'react'
import Car from '../../assets/car.png'
import Boat from '../../assets/boat.png'
import Garage from '../../assets/garage.png'
import Pipe from '../../assets/pipe.png'

const Image = () => {
  return (
    <div className="flex justify-between gap-x-3 overflow-hidden">
      <img src={Car} alt="Car Image" className="w-[24%]"/>
      <img src={Boat} alt="Boat Image" className="w-[24%]"/>
      <img src={Garage} alt="Garage Image" className="w-[24%]"/>
      <img src={Pipe} alt="Pipe Image" className="w-[24%]"/>
    </div>
  )
}

export default Image
