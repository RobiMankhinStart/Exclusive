import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="p-4 text-gray-500">No images available</div>;
  }

  return (
    <div className="relative flex  flex-col lg:flex-row-reverse gap-4 items-center mx-auto max-w-[90%] lg:max-w-[804px]">
      <div className=" rounded-2xl flex items-center gap-1 p-1 lg:p-2 px-2 left-6 lg:px-4 lg:left-[185px]  md:left-12 top-4 hover:scale-110 duration-300 z-40  shadow-gray-600 shadow-md bg-white absolute">
        <BsStars />
        New in
      </div>
      <div className="p-2 lg:p-3 rounded-full right-6 md:right-12 lg:right-[16px] top-3 hover:scale-110 duration-300 z-40  shadow-gray-600 shadow-md bg-white absolute">
        <IoBagHandleOutline className="text-primary  text-[22px] " />
      </div>

      {/* Main Image Display */}
      <div className=" w-[100%] lg:w-[640px] ">
        <img
          src={images[currentImageIndex]}
          alt={`Product view ${currentImageIndex + 1}`}
          className="w-full rounded-xl h-auto max-h-[650px] object-contain"
        />
      </div>
      {/* Thumbnails Column - Left Side */}
      <div className="  flex items-start gap-10 lg:flex-col">
        {images.map((image, index) => (
          <div
            key={`thumb-${index}`}
            className={`max-w-[16%] mx-auto lg:max-w-[150px] rounded-lg  cursor-pointer border-2 transition-all ${
              index === currentImageIndex
                ? "border-blue-500 scale-105"
                : "border-transparent hover:border-gray-300"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProSlider;
