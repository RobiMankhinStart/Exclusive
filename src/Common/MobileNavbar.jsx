import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const MobileNavbar = () => {
  const reduxCardIds = useSelector((state) => state.proSlice.cartItems);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-40 shadow-md">
      {/* Top Offer Bar */}
      <div className="bg-black text-white text-center text-sm py-2 px-3 font-poppins">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link to="/shop" className="underline font-semibold">
          Shop Now
        </Link>
      </div>

      {/* Navbar Main */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-[25px] font-inter font-semibold text-gray-700"
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

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <CiSearch className="text-[26px] text-gray-700 cursor-pointer" />
          <div
            onClick={() => setCartOpen(true)}
            className="relative cursor-pointer text-gray-700"
          >
            <IoCartOutline className="text-[26px]" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {reduxCardIds?.length || 0}
            </span>
          </div>
          <Link to="/login">
            <FiUser className="text-[26px] text-gray-700 cursor-pointer" />
          </Link>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-[28px] text-gray-700 focus:outline-none"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-3 bg-[#F5F5F5] rounded-lg px-3 py-2">
          <CiSearch className="text-[22px] text-gray-700" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none flex-1 text-[14px] text-gray-700"
          />
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center p-6 pt-20 space-y-6 text-gray-800 font-inter text-lg font-medium overflow-y-auto h-full">
          <Link to="/" className="inline-block">
            Home
          </Link>
          <Link to="/contact" className="inline-block">
            Contact
          </Link>
          <Link to="/about" className="inline-block">
            About
          </Link>
          <Link to="/signup" className="inline-block">
            Sign Up
          </Link>

          {/* Icons Row */}
          <div className="flex gap-4 pt-8 text-[28px]">
            <IoMdHeartEmpty className="hover:text-red-500 cursor-pointer" />
            <FiUser className="hover:text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* Slide-Out Cart */}
      {cartOpen && (
        <Cart
          reduxCardIds={reduxCardIds}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      )}
    </div>
  );
};

export default MobileNavbar;
