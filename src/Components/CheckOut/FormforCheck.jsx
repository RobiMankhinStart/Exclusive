import React from "react";

const FormforCheck = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block font-medium">First Name*</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 mt-1"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Company Name</label>
        <input type="text" className="w-full border rounded-md p-2 mt-1" />
      </div>
      <div>
        <label className="block font-medium">Street Address*</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 mt-1"
          required
        />
      </div>
      <div>
        <label className="block font-medium">
          Apartment, floor, etc. (optional)
        </label>
        <input type="text" className="w-full border rounded-md p-2 mt-1" />
      </div>
      <div>
        <label className="block font-medium">Town/City*</label>
        <input
          type="text"
          className="w-full border rounded-md p-2 mt-1"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Phone Number*</label>
        <input
          type="tel"
          className="w-full border rounded-md p-2 mt-1"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Email Address*</label>
        <input
          type="email"
          className="w-full border rounded-md p-2 mt-1"
          required
        />
      </div>

      <div className="flex items-center gap-2 pt-2">
        <input type="checkbox" defaultChecked className="accent-red-500" />
        <label className="text-sm text-gray-700">
          Save this information for faster check-out next time
        </label>
      </div>
    </form>
  );
};

export default FormforCheck;
