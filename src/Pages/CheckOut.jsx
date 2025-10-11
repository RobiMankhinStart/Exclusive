import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import FormforCheck from "../Components/CheckOut/FormforCheck";

const CheckOut = () => {
  const [products, setProducts] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const localIds = JSON.parse(localStorage.getItem("proDUCTid")) || [];

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const cartItems = products?.filter((item) => localIds?.includes(item.id));
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal;

  const removeItem = (id) => {
    const updated = localIds.filter((item) => item !== id);
    localStorage.setItem("proDUCTid", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Billing Details */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <FormforCheck />
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow space-y-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 cursor-pointer hover:text-red-700"
              >
                <RiDeleteBin5Line size={20} />
              </button>
            </div>
          ))}

          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p className="font-semibold">${subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p className="font-semibold text-green-600">Free</p>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <p>Total:</p>
              <p>${total}</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-3 pt-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={selectedPayment === "bank"}
                onChange={() => setSelectedPayment("bank")}
                className="accent-red-500"
              />
              <span>Bank</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="visa"
                className="w-10 ml-2"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="master"
                className="w-10"
              />
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={selectedPayment === "cod"}
                onChange={() => setSelectedPayment("cod")}
                className="accent-red-500"
              />
              <span>Cash on Delivery</span>
            </label>
          </div>

          {/* Coupon & Button */}
          <div className="flex gap-2 pt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border rounded-md p-2 flex-1"
            />
            <button className="bg-red-500 text-white px-4 rounded hover:bg-red-600">
              Apply Coupon
            </button>
          </div>

          <button className="w-full mt-5 bg-red-500 text-white py-3 rounded hover:bg-red-600 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
