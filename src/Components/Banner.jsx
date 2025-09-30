import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="mainDiv flex justify-between items-center ">
          <div className="category flex flex-col items-center gap-4 justify-center">
            <div className="text-lg font-poppins text-black flex justify-between items-center  w-[217px]">
              Woman’s Fashion
              <IoIosArrowForward className="pt-[2px] text-[24px]" />
            </div>
            <div className="text-lg font-poppins text-black flex justify-between items-center  w-[217px]">
              Man’s Fashion
              <IoIosArrowForward className="pt-[2px] text-[24px]" />
            </div>
            <div className="text-lg font-poppins text-black flex justify-between items-center  w-[217px]">
              Electronics
            </div>
          </div>
          <div className="slider"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
