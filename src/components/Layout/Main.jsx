import React, { useEffect, useState } from "react";
import Header from "./Header";
import Product1 from "../../assets/Images/product1.webp";
import Product2 from "../../assets/Images/product2.webp";
import Product3 from "../../assets/Images/product3.webp";
import Product4 from "../../assets/Images/product4.webp";
import Product5 from "../../assets/Images/product5.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function Main() {
  const [currentCard, setCurrentCard] = useState(0);

  // Cards data
  const cards = [
    {
      id: "card1",
      imgSrc: Product1,
      title: "Crystal Agate Phone",
      price: "18.99$",
    },
    {
      id: "card2",
      imgSrc: Product2,
      title: "Crystal Agate Phone",
      price: "18.99$",
    },
    {
      id: "card3",
      imgSrc: Product3,
      title: "Crystal Agate Phone",
      price: "18.99$",
    },
    {
      id: "card4",
      imgSrc: Product4,
      title: "Crystal Agate Phone",
      price: "18.99$",
    },
    {
      id: "card5",
      imgSrc: Product2,
      title: "Crystal Agate Phone",
      price: "18.99$",
    },
  ];

  // Handle Next Card
  const nextCard = () => {
    setCurrentCard((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle Previous Card
  const prevCard = () => {
    setCurrentCard((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextCard(); // Calls the next card function every 3 seconds
    }, 3000);
  
    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [currentCard]);

  const handleDotClick = (index) => {
    setCurrentCard(index);
  };
  return (
    <div className="md:h-[720px] h-[800px] bg-gradient-to-br from-[#d1a4bc] via-[#70cafe] to-[#6db8f9] relative">
      <Header />
      <main className="px-16 md:pt-40 pt-20 flex md:flex-row flex-col gap-20 relative z-10">
        <div className="md:w-[60%] w-full flex md:text-left text-center md:items-start items-center  gap-2 flex-col">
          <h2 className="md:text-4xl md:text-left   text-3xl font-medium text-white">
            Welcome to
          </h2>
          <h1 className="md:text-7xl md:text-left  text-6xl  font-bold text-white">
            Pop Rock Crystal Shop!
          </h1>
          <p className="md:text-left text-center max-w-sm mt-8 text-[#31546D] leading-relaxed text-lg">
            Here you will find unique phone accessories, crystals, jewelry and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </p>

          <div className="flex gap-5 mt-8 items-center">
            <button className="w-44 h-14 bg-white rounded-3xl font-bold text-[#317189]">
              SHOP NOW
            </button>
            <p className="text-[#317189] text-lg">about us</p>
          </div>
        </div>

        <div id="card-slider" className="hidden md:block relative -mt-32 w-[530px] ">
          <div className="overflow-hidden rounded-[50px]  shadow-xl    w-[530px]">
            {/* Inner Container with flex and sliding effect */}
            <div
              className="flex  transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentCard * 530}px)`, // Sliding exactly by card width
              }}
            >
              {/* Render all cards horizontally */}
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className="flex-shrink-0  flex flex-col justify-center items-center bg-white rounded-[50px] h-[520px] w-[530px] shadow-slate-500 shadow-2xl "
                >
                  <img className="w-80" src={card.imgSrc} alt="product" />
                  <p className="uppercase text-xl font-medium text-[#818181]">
                    {card.title}
                  </p>
                  <p className="uppercase text-xl font-medium text-[#818181]">
                    Grip
                    <span className="text-[#317189] font-semibold">
                      - {card.price}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation and Dots */}
          <div className="flex justify-center items-center mt-6 space-x-8">
            {/* Previous Button */}
            <button
              onClick={prevCard}
              className="bg-[#8a93e5] text-white w-8 h-8 rounded-md flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Dots for Pagination */}
            <div className="flex space-x-2">
              {cards.map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`cursor-pointer w-3 h-3 rounded-full ${
                    currentCard === index ? "bg-[#8a93e5]" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextCard}
              className="bg-[#8a93e5] text-white w-8 h-8 rounded-md flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <div id="scroll-down " className="md:hidden flex gap-3 justify-center ">
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
      </main>

      <div
        id="curve"
        className="hidden sm:block wave absolute bottom-0 left-0 w-full z-0"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
