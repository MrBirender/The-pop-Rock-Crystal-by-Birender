import React from "react";
import Card from "../utils/Card";
import Product1 from "../../assets/Images/product1.webp";
import Product2 from "../../assets/Images/product2.webp";
import Product3 from "../../assets/Images/product3.webp";
import Product4 from "../../assets/Images/product4.webp";
import Product5 from "../../assets/Images/product5.webp";

export default function Product() {
  return (
    <div className="flex flex-col gap-24 sm:px-16 px-4 ">
      <div id="scroll-down " className="md:flex hidden  gap-3 justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M14 7C13.6906 7 13.3938 7.12291 13.175 7.3417C12.9562 7.5605 12.8333 7.85724 12.8333 8.16666V10.5C12.8333 10.8094 12.9562 11.1062 13.175 11.325C13.3938 11.5437 13.6906 11.6667 14 11.6667C14.3094 11.6667 14.6061 11.5437 14.8249 11.325C15.0437 11.1062 15.1666 10.8094 15.1666 10.5V8.16666C15.1666 7.85724 15.0437 7.5605 14.8249 7.3417C14.6061 7.12291 14.3094 7 14 7ZM14 2.33333C11.834 2.33333 9.75682 3.19374 8.22527 4.72529C6.69373 6.25684 5.83331 8.33406 5.83331 10.5V17.5C5.83331 19.6659 6.69373 21.7432 8.22527 23.2747C9.75682 24.8062 11.834 25.6667 14 25.6667C16.1659 25.6667 18.2431 24.8062 19.7747 23.2747C21.3062 21.7432 22.1666 19.6659 22.1666 17.5V10.5C22.1666 8.33406 21.3062 6.25684 19.7747 4.72529C18.2431 3.19374 16.1659 2.33333 14 2.33333ZM19.8333 17.5C19.8333 19.0471 19.2187 20.5308 18.1248 21.6248C17.0308 22.7187 15.5471 23.3333 14 23.3333C12.4529 23.3333 10.9692 22.7187 9.87519 21.6248C8.78123 20.5308 8.16665 19.0471 8.16665 17.5V10.5C8.16665 8.9529 8.78123 7.46917 9.87519 6.37521C10.9692 5.28124 12.4529 4.66666 14 4.66666C15.5471 4.66666 17.0308 5.28124 18.1248 6.37521C19.2187 7.46917 19.8333 8.9529 19.8333 10.5V17.5Z"
            fill="#307189"
          ></path>
        </svg>
        <p className="text-[#307189] font-semibold">scroll down</p>
      </div>

      <div id="product-header" className="flex flex-col md:mt-2 mt-8 ">
        <h1 className="text-5xl mx-auto  text-[#31546d] font-semibold">
          All products
        </h1>
        <span className="block w-[4%] border-b-4 mx-auto mt-4"></span>
        <div id="selction" className="flex gap-16 mt-8">
          <div id="one" className="flex gap-1">
            <p className="text-[#9AB0C0] font-semibold text-lg">Filter:</p>
            <select
              className="
              text-[#31546D] 
              text-lg 
              font-semibold 
              border-2 
              border-[#73d4fb] 
              rounded-md 
              outline-none 
              bg-white"
              name="one"
            >
              <option value="most liked"> Most Liked</option>
              <option value="newest"> Newest</option>
              <option value="cheapest">Cheapest</option>
            </select>
          </div>

          <div id="two" className="flex gap-1">
            <p className="text-[#9AB0C0] font-semibold text-lg">Sort:</p>
            <select
              className="
      text-[#31546D] 
      text-lg 
      font-semibold 
      border-2 
      border-[#73d4fb]
      rounded-md 
      outline-none 
      bg-white 
     "
            >
              <option value="most liked"> Most Liked</option>
              <option value="newest"> Newest</option>
              <option value="cheapest">Cheapest</option>
            </select>
          </div>
        </div>

        <div
          id="products"
          className="mt-12 grid justify-center gap-5 sm:grid-cols-3 md:grid-cols-5"
        >
          <Card imgSrc={Product1} />
          <Card imgSrc={Product2} />
          <Card imgSrc={Product3} />
          <Card imgSrc={Product4} />
          <Card imgSrc={Product5} />
        </div>

        <div className="mt-4 flex sm:justify-between gap-5 items-center flex-col sm:flex-row ">
        <Card imgSrc={Product2} />
        <Card imgSrc={Product3} />
        <Card imgSrc={Product4} />
        </div>

        <button className='mt-8 px-16 py-3 self-center hover:bg-[#70d3fa] border-2 border-[#70d3fa] rounded-3xl hover:text-white text-[#70d3fa] text-lg font-medium'>View All</button>
      </div>
    </div>
  );
}
