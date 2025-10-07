import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" border-b border-[#b3b3b3]">
      <div className="top bg-black py-3 ">
        <div className="container flex justify-end items-center">
          <div className="flex items-center justify-center gap-2 mr-[231px]">
            <p className="text-[14px] font-poppins text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link
              className="text-[14px] underline font-semibold font-poppins text-white"
              to={"/shop"}
            >
              ShopNow
            </Link>
          </div>
          <div className="text-white font-poppins flex items-center gap-[5px] justify-center">
            English <IoIosArrowDown className="text-[24px] pt-[2px]" />
          </div>
        </div>
      </div>
      <div className="container pt-10 pb-4">
        <nav className="flex justify-between items-center">
          <h2 className="text-[25px] font-inter font-semibold">
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
          </h2>

          <ul className="flex text-[#989898] items-center gap-[52px]">
            <li
              className="relative font-inter text-lg font-medium cursor-pointer
      after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
      after:h-[2px] after:w-0 after:bg-black
      after:transition-all after:duration-300
      hover:after:w-full text-black"
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className="relative font-inter text-lg font-medium cursor-pointer
      after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
      after:h-[2px] after:w-0 after:bg-black
      after:transition-all after:duration-300
      hover:after:w-full text-black"
            >
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li
              className="relative font-inter text-lg font-medium cursor-pointer
      after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
      after:h-[2px] after:w-0 after:bg-black
      after:transition-all after:duration-300
      hover:after:w-full text-black"
            >
              <Link to={"/about"}>About</Link>
            </li>
            <li
              className="relative font-inter text-lg font-medium cursor-pointer
      after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
      after:h-[2px] after:w-0 after:bg-black
      after:transition-all after:duration-300
      hover:after:w-full text-black"
            >
              <Link to={"/signup"}>Sign Up</Link>
            </li>
          </ul>
          <div className=" py-[10px] pl-5 pr-3 bg-[#F5F5F5] text-[#989898] rounded-[8px] flex items-center gap-[34px]">
            <input
              className="outline-none text-[12px] font-poppins"
              type="text"
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-[24px] text-black" />
          </div>
          <div className="flex items-center gap-6">
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <IoMdHeartEmpty />
            </div>
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <IoCartOutline />
            </div>
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <FiUser />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
