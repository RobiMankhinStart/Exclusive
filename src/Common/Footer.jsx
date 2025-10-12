import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { TbArrowBigRightLines } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-black pt-8 sm:pt-12 lg:pt-[80px] relative left-0 right-0 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mainDiv mb-8 sm:mb-12 lg:mb-[60px] flex flex-col lg:flex-row flex-wrap gap-8 sm:gap-12 lg:gap-16 xl:gap-20 justify-between">
          {/* Brand & Subscribe Section */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full lg:w-auto min-w-[250px]">
            <h3 className="text-white text-xl sm:text-2xl lg:text-[24px] font-bold font-inter">
              Exclusive
            </h3>
            <p className="text-white text-lg sm:text-xl lg:text-[20px] font-medium font-poppins">
              Subscribe
            </p>
            <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins">
              Get 10% off your first order
            </p>
            <div className="flex w-full max-w-[280px] items-center rounded-md border border-white bg-transparent">
              <input
                className="text-white outline-none pl-3 sm:pl-4 py-2 sm:py-3 text-sm bg-transparent flex-1 placeholder-gray-400"
                type="text"
                placeholder="Enter your email"
              />
              <button className="px-2 sm:px-3 py-2 sm:py-3 hover:bg-white hover:bg-opacity-10 transition-colors duration-200">
                <TbArrowBigRightLines className="text-white text-xl sm:text-2xl lg:text-[28px]" />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full sm:w-[45%] lg:w-auto min-w-[250px]">
            <p className="text-white text-lg sm:text-xl lg:text-[20px] font-medium font-poppins">
              Support
            </p>
            <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins leading-relaxed">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins">
              exclusive@gmail.com
            </p>
            <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins">
              +88015-88888-9999
            </p>
          </div>

          {/* Account Section */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full sm:w-[45%] lg:w-auto min-w-[200px]">
            <p className="text-white text-lg sm:text-xl lg:text-[20px] font-medium font-poppins">
              Account
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins hover:text-gray-300 cursor-pointer transition-colors duration-200">
                My Account
              </p>
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins hover:text-gray-300 cursor-pointer transition-colors duration-200">
                Login / Register
              </p>
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins hover:text-gray-300 cursor-pointer transition-colors duration-200">
                Cart
              </p>
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins hover:text-gray-300 cursor-pointer transition-colors duration-200">
                Wishlist
              </p>
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins hover:text-gray-300 cursor-pointer transition-colors duration-200">
                Shop
              </p>
            </div>
          </div>

          {/* Quick Link Section */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full sm:w-[45%] lg:w-auto min-w-[200px]">
            <p className="text-white text-lg sm:text-xl lg:text-[20px] font-medium font-poppins">
              Quick Link
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins hover:text-gray-300 cursor-pointer transition-colors duration-200">
                Privacy Policy
              </p>
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins hover:text-gray-300 cursor-pointer transition-colors duration-200">
                Terms Of Use
              </p>
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins hover:text-gray-300 cursor-pointer transition-colors duration-200">
                FAQ
              </p>
              <p className="text-white text-sm sm:text-base lg:text-[16px] font-poppins hover:text-gray-300 cursor-pointer transition-colors duration-200">
                Contact
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="pt-4 pb-6 text-sm sm:text-base lg:text-lg text-[#918686] font-poppins border-t border-[#867b7b] flex items-center justify-center gap-2 px-4">
        <FaRegCopyright className="text-sm" />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
