import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { removeFromCart } from "../ProductSlice";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = ({ setCartOpen, cartOpen, reduxCardIds }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const localIds = JSON.parse(localStorage.getItem("proDUCTid")) || [];

  // filtering only the items that arein the local storage ....
  const cartItems = products?.filter((item) => localIds?.includes(item.id));
  // console.log(cartItems);
  // api fetching
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(products);
  // total Money................
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  // ................remove from cart .........
  const removeItem = (proID) => {
    const updatedIDs = localIds.filter((item) => item !== proID);
    localStorage.setItem("proDUCTid", JSON.stringify(updatedIDs));
    dispatch(removeFromCart(proID));
  };

  return (
    <>
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed left-0 top-0 w-full h-screen bg-[#00000080] z-40 transition-opacity duration-300 ${
          cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* ......... Slide-out Cart ......... */}
      <div
        className={`fixed top-0 right-0 z-50 w-full md:w-[650px] bg-white h-full shadow-xl flex flex-col transform transition-transform duration-500 ease-in-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between md:w-[72%] lg:w-full items-center p-5">
          <div className=" flex flex-wrap items-center w-[70%] md:gap-8 gap-6">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <p className="font-medium font-inter mt-1 text-[16px]">
              <span>Total Items : </span>
              {reduxCardIds?.length || 0}
            </p>
          </div>
          <IoClose
            onClick={() => setCartOpen(false)}
            className="text-[26px] cursor-pointer hover:text-red-500 transition"
          />
        </div>

        {/* Cart Items */}
        <div className="border-t flex-1 max overflow-y-scroll min-h-[340px] p-2 py-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-6"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-16 h-16 rounded object-cover border"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-[30px] text-red-700 hover:scale-105 duration-100 flex items-center"
                >
                  <RiDeleteBin5Line />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {/* <select
                  className="border rounded px-2 py-1 text-sm"
                  defaultValue={item.qty}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select> */}
                {/* <p className="font-semibold text-gray-700">
                  ${item.price * item.qty}
                </p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t p-5 space-y-4">
          <div className="flex justify-between text-gray-700">
            <p>Subtotal:</p>
            <p className="font-semibold">${subtotal}</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Shipping:</p>
            <p className="font-semibold text-green-600">Free</p>
          </div>
          <div className="flex justify-between text-gray-900 text-lg font-semibold">
            <p>Total:</p>
            <p>${subtotal}</p>
          </div>
          <Link
            to={"/checkout/checkoutproduct"}
            className="w-full bg-red-500 text-white py-3 px-3 rounded hover:bg-red-600 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
