import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { TbArrowBigRightLines } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-black pt-[80px] relative left-0 right-0 w-full ">
      <div className="container">
        <div className="mainDiv px-[135px] mb-[60px] flex justify-between items-start">
          <div className="flex flex-col justify-center  gap-6">
            <h3 className="text-white text-[24px] font-bold font-inter">
              Exclusive
            </h3>
            <p className="text-white text-[20px] font-medium font-poppins">
              Subscribe
            </p>
            <p className="text-white text-[16px]  font-poppins">
              Get 10% off your first order
            </p>
            <div className="flex w-[217px] items-center rounded-md border border-white ">
              <input
                className="text-white outline-none pl-4 py-3 text-sm rounded-md"
                type="text"
                placeholder="Enter your email"
              />
              <TbArrowBigRightLines className="text-white text-[28px]" />
            </div>
          </div>
          <div className="flex flex-col justify-center  gap-6">
            <p className="text-white text-[20px] font-medium font-poppins">
              Support
            </p>
            <p className="text-white text-[16px]  font-poppins">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-white text-[16px]  font-poppins">
              exclusive@gmail.com
            </p>
            <p className="text-white text-[16px]  font-poppins">
              +88015-88888-9999
            </p>
          </div>
          <div className="flex flex-col justify-center  gap-6">
            <p className="text-white text-[20px] font-medium font-poppins">
              Account
            </p>
            <p className="text-white text-[16px]  font-poppins">My Account</p>
            <p className="text-white text-[16px]  font-poppins">
              Login / Register
            </p>
            <p className="text-white text-[16px]  font-poppins">Cart</p>
            <p className="text-white text-[16px]  font-poppins">Wishlist</p>
            <p className="text-white text-[16px]  font-poppins">Shop</p>
          </div>
          <div className="flex flex-col justify-center  gap-6">
            <p className="text-white text-[20px] font-medium font-poppins">
              Quick Link
            </p>
            <p className="text-white text-[16px]  font-poppins">
              Privacy Policy
            </p>
            <p className="text-white text-[16px]  font-poppins">Terms Of Use</p>
            <p className="text-white text-[16px]  font-poppins">FAQ</p>
            <p className="text-white text-[16px]  font-poppins">Contact</p>
          </div>
          <div className="flex flex-col justify-center  gap-6"></div>
        </div>
      </div>
      <div className="pt-4 pb-6 text-lg text-[#918686] font-poppins  border-t border-[#867b7b] flex items-center justify-center">
        <FaRegCopyright />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
