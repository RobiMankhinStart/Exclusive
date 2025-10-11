import { useState } from "react";
import axios from "axios";
import signUpImg from "../assets/signUpImg.png";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Form submitted:", formData);

    // Example API call (replace with your actual endpoint)
    // axios.post("/api/login", formData)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mainDiv flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Image Section - Hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:block w-full lg:w-[55%]">
            <img
              src={signUpImg}
              className="w-full h-auto rounded-lg object-cover max-h-[600px]"
              alt="Login illustration"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center py-8 lg:py-12">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
                Log in to Exclusive
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Enter your details below
              </p>
            </div>

            <div className="mt-6 sm:mt-8 w-full max-w-md mx-auto">
              <div className="bg-white py-6 sm:py-8 px-4 sm:px-6 shadow sm:rounded-lg">
                <form
                  className="space-y-4 sm:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email or Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#DB4444] focus:border-[#DB4444] text-sm sm:text-base"
                        placeholder="Enter your email or phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#DB4444] focus:border-[#DB4444] text-sm sm:text-base"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex justify-center py-2 sm:py-3 px-6 sm:px-12 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-[#DB4444] hover:bg-[#c33a3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DB4444] transition-colors duration-200"
                    >
                      Log In
                    </button>
                    <button
                      type="button"
                      className="text-[#DB4444] font-poppins text-sm sm:text-[16px] hover:text-[#c33a3a] transition-colors duration-200 whitespace-nowrap"
                    >
                      Forget Password?
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or log in with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={handleGoogleLogin}
                      className="w-full inline-flex justify-center items-center py-2 sm:py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm sm:text-base font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="ml-2">Log in with Google</span>
                    </button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have any account?{" "}
                    <a
                      href="/signup"
                      className="font-medium text-[#DB4444] hover:text-[#c33a3a] transition-colors duration-200"
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
