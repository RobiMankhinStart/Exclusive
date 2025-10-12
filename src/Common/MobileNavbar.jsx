import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

import Cart from "./Cart";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancelPresentation } from "react-icons/md";
import SideNav from "./SideNav";

const MobileNavbar = () => {
  const reduxCardIds = useSelector((state) => state.proSlice.cartItems);

  const [cartOpen, setCartOpen] = useState(false);
  const [options, setOptions] = useState(false);
  console.log(options);
  return (
    <div className="bg-white fixed top-[-5%] left-0 right-0 z-20 py-[27px] lg:hidden block dark:text-white border-b border-[#b3b3b3]">
      <div className="top bg-black py-3 ">
        <div className="container flex flex-col gap-1 items-center">
          <div className=" flex justify-center flex-wrap items-center gap-5 ">
            <p className="text-[12px] font-poppins text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link
              className="text-[12px] underline font-semibold font-poppins text-white"
              to={"/shop"}
            >
              ShopNow
            </Link>
          </div>
          <div className="text-white font-poppins flex items-center gap-[5px] justify-center">
            English <IoIosArrowDown className="text-[20px] pt-[2px]" />
          </div>
        </div>
      </div>
      <div className="container pt-2">
        <nav className="flex flex-col gap-3 items-center">
          <div className="flex items-center  justify-between w-full">
            <Link
              to={"/"}
              className="hover:scale-110 duration-300 cursor-pointer text-[25px] font-inter font-semibold"
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
            <div
              onClick={() => setOptions(!options)}
              className="cursor-pointer text-[28px]"
            >
              {options ? <MdOutlineCancelPresentation /> : <RxHamburgerMenu />}
            </div>
          </div>

          <div className="w-full py-[10px] pl-5  bg-[#F5F5F5] text-[#989898] rounded-[8px] flex justify-between px-5 items-center ">
            <input
              className="outline-none w-[80%] text-[12px] font-poppins"
              type="text"
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-[24px] text-black" />
          </div>
          <div className="flex items-center gap-6">
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <IoMdHeartEmpty />
            </div>

            {/* Cart Toggle */}
            <div
              onClick={() => setCartOpen(!cartOpen)}
              className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200 relative"
            >
              <IoCartOutline />
              {/* Cart Count Example */}
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {reduxCardIds?.length || 0}
              </span>
            </div>
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <Link to={"/login"}>
                <FiUser />
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* ===== Slide-Out Cart ===== */}
      {cartOpen && (
        <Cart
          reduxCardIds={reduxCardIds}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      )}
      <SideNav options={options} setOptions={setOptions} />
    </div>
  );
};

export default MobileNavbar;
