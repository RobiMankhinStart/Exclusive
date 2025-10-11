import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const MobileNavbar = () => {
  const reduxCardIds = useSelector((state) => state.proSlice.cartItems);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Top Banner - Hidden on mobile */}
      <div className="bg-black py-3 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-end items-center">
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

      {/* Main Navbar */}
      <div className="bg-white fixed top-0 left-0 right-0 z-50 py-4 border-b border-[#b3b3b3]">
        <div className="container mx-auto px-4">
          {/* Mobile Header */}
          <div className="flex lg:hidden justify-between items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-2xl text-gray-700 p-2"
            >
              {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>

            {/* Logo - Centered on mobile */}
            <Link to={"/"} className="text-xl font-inter font-semibold">
              <span className="font-bold text-gray-600">E</span>x
              <span className="font-bold text-gray-600">C</span>lu
              <span className="font-bold text-gray-600">S</span>ive
            </Link>

            {/* Mobile Icons */}
            <div className="flex items-center gap-4">
              <div className="text-2xl text-black cursor-pointer">
                <CiSearch />
              </div>
              <div
                onClick={() => setCartOpen(!cartOpen)}
                className="text-2xl text-black cursor-pointer relative"
              >
                <IoCartOutline />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {reduxCardIds?.length || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-between items-center">
            {/* Logo */}
            <Link to={"/"} className="text-[25px] font-inter font-semibold">
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

            {/* Navigation Links */}
            <ul className="flex text-[#989898] items-center gap-[52px]">
              <li className="nav-link">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav-link">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li className="nav-link">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="nav-link">
                <Link to={"/signup"}>Sign Up</Link>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="py-[10px] pl-5 pr-3 bg-[#F5F5F5] text-[#989898] rounded-[8px] flex items-center gap-[34px]">
              <input
                className="outline-none text-[12px] font-poppins bg-transparent w-48"
                type="text"
                placeholder="What are you looking for?"
              />
              <CiSearch className="text-[24px] text-black" />
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-6">
              <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
                <IoMdHeartEmpty />
              </div>

              <div
                onClick={() => setCartOpen(!cartOpen)}
                className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200 relative"
              >
                <IoCartOutline />
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
          </div>

          {/* Mobile Search Bar - Hidden by default, shown when needed */}
          <div className="lg:hidden mt-4 hidden">
            <div className="py-3 px-4 bg-[#F5F5F5] text-[#989898] rounded-[8px] flex items-center gap-3">
              <input
                className="outline-none text-sm font-poppins bg-transparent flex-1"
                type="text"
                placeholder="What are you looking for?"
              />
              <CiSearch className="text-xl text-black" />
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-white mt-16">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Navigation Links */}
              <ul className="flex flex-col space-y-6 text-lg">
                <li>
                  <Link
                    to={"/"}
                    className="block py-3 text-gray-700 font-medium border-b border-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="block py-3 text-gray-700 font-medium border-b border-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="block py-3 text-gray-700 font-medium border-b border-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/signup"}
                    className="block py-3 text-gray-700 font-medium border-b border-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/login"}
                    className="block py-3 text-gray-700 font-medium border-b border-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              </ul>

              {/* Mobile Additional Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-around">
                  <div className="text-2xl text-black cursor-pointer text-center">
                    <IoMdHeartEmpty />
                    <span className="block text-xs mt-1">Wishlist</span>
                  </div>
                  <div className="text-2xl text-black cursor-pointer text-center relative">
                    <FiUser />
                    <span className="block text-xs mt-1">Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cart Component */}
      {cartOpen && (
        <Cart
          reduxCardIds={reduxCardIds}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      )}

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16 lg:h-28"></div>
    </>
  );
};

export default MobileNavbar;
