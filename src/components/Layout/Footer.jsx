import React from "react";
import Product1 from "../../assets/Images/product1.webp";

export default function Footer() {
  return (
    <div className="relative md:px-16 p-2 h-[810px] mt-8 md:bg-none bg-gradient-to-br from-[#d1a4bc] via-[#70cafe] to-[#6db8f9] ">
      <div className="flex gap-5 h-full relative z-10">
        <div className="flex items-center  justify-center  flex-col gap-3 w-full md:w-[50%]  ">
          <h2 className="md:-mt-40 mt-2 ml-8 text-4xl uppercase font-light text-[#31546D]">
            Best Price
          </h2>
          <h1 className="md:text-6xl text-5xl  font-bold md:mr-[253px] mr-0 -mt-3 text-[#31546d]">
            Agate Phone Grip
          </h1>
          <div className="flex gap-4 items-center mr-6">
            <p className="text-2xl mt-5  line-through text-[#43a1b8]">44.50$</p>
            <h2 className="text-6xl mt-5  font-semibold text-[#e35b3e]">
              19.50$
            </h2>
          </div>
          <p className="md:mr-36 mt-5 text-sm max-w-96 text-wrap md:text-right text-center text-[#215b82]">
            These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc.!
            Just gently squeeze the sides to remove and swap out with another
            color or design!
          </p>
          <button className="mt-4 px-12 py-2 md:ml-20 ml-0 md:hover:bg-[#70d3fa]  hover:bg-[#e7775e] border-2 border-[#46c3f5] rounded-3xl hover:text-white text-white md:bg-white bg-[#e35b3e] md:text-[#70d3fa] text-lg font-medium">
            Buy Now
          </button>
        </div>
        <div className="hidden md:flex w-[50%] h-[80%] justify-center items-center mt-10 ">
          <div className="shadow-md flex justify-center items-center w-[650px] h-[650px] rounded-full">
            <div className="bg-white shadow-2xl  flex justify-center items-center w-[500px] h-[500px] rounded-full">
            <div className="bg-white p-4 shadow-2xl w-[300px] h-[300px] rounded-full">
              <img src={Product1} alt="productFooter" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block custom-shape-divider-bottom-1727792305  z-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
