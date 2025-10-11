import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              {/* Call To Us Section */}
              <div className="mb-8 sm:mb-12">
                <div className="flex  gap-2">
                  <h3 className="w-10 h-10  rounded-full bg-red-600 flex items-center justify-center">
                    <IoCallOutline className="text-white text-[26px]" />
                  </h3>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Call To Us
                  </h2>
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-gray-800 font-medium text-sm sm:text-base">
                  Phone: +88018112222
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-400 my-6 sm:my-8"></div>

              {/* Write To US Section */}
              <div>
                <div className="flex gap-2">
                  <h3 className="w-10 h-10  rounded-full bg-red-600 flex items-center justify-center">
                    <MdOutlineMail className="text-white text-[26px]" />
                  </h3>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Write To US
                  </h2>
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-800 text-sm sm:text-base">
                    <span className="font-medium">Email:</span>{" "}
                    customer@exclusive.com
                  </p>
                  <p className="text-gray-800 text-sm sm:text-base">
                    <span className="font-medium">Email:</span>{" "}
                    support@exclusive.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name, Email, Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] text-sm sm:text-base"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] text-sm sm:text-base resize-vertical"
                    placeholder="Enter your message"
                  />
                </div>

                {/* Send Message Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-2 sm:py-3 bg-[#DB4444] text-white font-medium rounded-md hover:bg-[#c33a3a] focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:ring-offset-2 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
