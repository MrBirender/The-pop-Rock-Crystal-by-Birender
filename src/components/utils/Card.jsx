import React from 'react'
import Image from "../../assets/Images/product1.webp"

export default function Card({imgSrc}) {
  return (
    <div className='pt-2 px-4 flex flex-col items-center  bg-white h-[400px] w-[300px]  rounded-3xl shadow-lg hover:shadow-2xl hover:duration-200 border-2 border-slate-200 '>
      <img className='w-[200px]' src={imgSrc} alt="one" />
      <p className="uppercase mt-8 text-lg font-medium text-gray-600">Crystal Agate Phone Grip </p>
      <p className="text-[#317189] text-xl font-semibold">18.99$</p>
      <button className='mt-4 px-16 py-3 hover:bg-[#70d3fa] border-2 border-[#70d3fa] rounded-3xl hover:text-white text-[#70d3fa] text-lg font-medium'>Buy Now</button>
    </div>
  )
}
