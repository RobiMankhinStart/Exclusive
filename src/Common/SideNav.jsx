import React from "react";
import { Link } from "react-router";

const SideNav = ({ options, setOptions }) => {
  if (!options) return null; // don't render anything if closed

  return (
    // Background overlay
    <div
      onClick={() => setOptions(false)}
      className="fixed inset-0 bg-[#00000086] bg-opacity-40 z-40"
    >
      {/* Sidebar */}
      <div
        onClick={(e) => e.stopPropagation()} // preventing closing when clicking inside sidebar
        className={`${
          options ? "left-0" : "left-[-100%]"
        } transition-all duration-300 ease-in-out shadow-lg bg-white z-50 h-screen fixed top-0 left-0 p-4 flex justify-center w-[200px]`}
      >
        <ul className="flex flex-col text-[#989898] items-center gap-6">
          <Link
            to={"/"}
            onClick={() => setOptions(false)}
            className="text-[25px] hover:scale-110 duration-300 font-inter font-semibold"
          >
            <span className="font-bold text-[27px] text-gray-600 font-poppins">
              E
            </span>
            x
            <span className="font-bold text-[27px] text-gray-600 font-poppins">
              C
            </span>
            lu
            <span className="font-bold text-[27px] text-gray-600 font-poppins">
              S
            </span>
            ive
          </Link>

          <li
            className="relative font-inter text-lg font-medium cursor-pointer
      after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
      after:h-[2px] after:w-0 after:bg-black
      after:transition-all after:duration-300
      hover:after:w-full text-black"
          >
            <Link to={"/contact"} onClick={() => setOptions(false)}>
              Contact
            </Link>
          </li>
          <li
            className="relative font-inter text-lg font-medium cursor-pointer
      after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
      after:h-[2px] after:w-0 after:bg-black
      after:transition-all after:duration-300
      hover:after:w-full text-black"
          >
            <Link to={"/about"} onClick={() => setOptions(false)}>
              About
            </Link>
          </li>
          <li
            className="relative font-inter text-lg font-medium cursor-pointer
      after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
      after:h-[2px] after:w-0 after:bg-black
      after:transition-all after:duration-300
      hover:after:w-full text-black"
          >
            <Link to={"/signup"} onClick={() => setOptions(false)}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
