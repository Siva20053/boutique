import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "/images/banner2.jpg",
    "/images/banner13.jfif",
    "/images/banner44.jpg",
    "/images/banner14.jfif",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="h-[280px] sm:h-[420px] lg:h-[650px] w-full relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          className="w-[400%] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-1/4 h-full flex-none object-cover"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-1/4 h-full flex-none object-cover"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-1/4 h-full flex-none object-cover"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-1/4 h-full flex-none object-cover"
            src={data[3]}
            alt="ImageFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-3 sm:gap-8 bottom-6 sm:bottom-10 lg:bottom-52">
          <div
            onClick={prevSlide}
            className="w-11 h-10 sm:w-14 sm:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-11 h-10 sm:w-14 sm:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
