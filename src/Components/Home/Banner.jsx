import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router";
import Slider from "react-slick";
import bannerimgone from "../../assets/bannerSliderImg1.png";
import bannerimgtwo from "../../assets/bannerSliderImg2.png";

const Banner = ({ products }) => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  // Get unique categories
  const uniqueCategories = [...new Set(products?.map((item) => item.category))];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-[140px]">
        <div className="mainDiv flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Categories Section */}
          <div className="lg:border-r lg:border-[#b3b3b3] lg:pr-6 w-full lg:w-auto">
            <div className="category pt-6 lg:pt-10 flex flex-col gap-3 sm:gap-4">
              {uniqueCategories?.map((value) => (
                <div
                  key={value}
                  className="category-item group cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <div className="text-base sm:text-lg font-poppins text-black flex justify-between items-center w-full lg:w-[217px] px-4 sm:px-0 py-3 sm:py-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 hover:translate-x-2 hover:border-l-4 hover:border-[#DB4444]">
                    <span className="font-medium capitalize group-hover:text-[#DB4444] transition-colors duration-300">
                      {value}
                    </span>
                    <IoIosArrowForward className="text-[20px] sm:text-[24px] text-gray-400 group-hover:text-[#DB4444] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}

              {/* Fallback categories if no products */}
              {(!products || products.length === 0) && (
                <>
                  <div className="category-item group cursor-pointer transition-all duration-300 ease-in-out">
                    <div className="text-base sm:text-lg font-poppins text-black flex justify-between items-center w-full lg:w-[217px] px-4 sm:px-0 py-3 sm:py-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 hover:translate-x-2 hover:border-l-4 hover:border-[#DB4444]">
                      <span className="font-medium capitalize group-hover:text-[#DB4444] transition-colors duration-300">
                        Electronics
                      </span>
                      <IoIosArrowForward className="text-[20px] sm:text-[24px] text-gray-400 group-hover:text-[#DB4444] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                  <div className="category-item group cursor-pointer transition-all duration-300 ease-in-out">
                    <div className="text-base sm:text-lg font-poppins text-black flex justify-between items-center w-full lg:w-[217px] px-4 sm:px-0 py-3 sm:py-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 hover:translate-x-2 hover:border-l-4 hover:border-[#DB4444]">
                      <span className="font-medium capitalize group-hover:text-[#DB4444] transition-colors duration-300">
                        Fashion
                      </span>
                      <IoIosArrowForward className="text-[20px] sm:text-[24px] text-gray-400 group-hover:text-[#DB4444] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                  <div className="category-item group cursor-pointer transition-all duration-300 ease-in-out">
                    <div className="text-base sm:text-lg font-poppins text-black flex justify-between items-center w-full lg:w-[217px] px-4 sm:px-0 py-3 sm:py-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 hover:translate-x-2 hover:border-l-4 hover:border-[#DB4444]">
                      <span className="font-medium capitalize group-hover:text-[#DB4444] transition-colors duration-300">
                        Home & Garden
                      </span>
                      <IoIosArrowForward className="text-[20px] sm:text-[24px] text-gray-400 group-hover:text-[#DB4444] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Slider Section */}
          <div className="pt-6 lg:pt-10 w-full lg:w-[892px]">
            <Slider {...settings}>
              {/* Slide 1 */}
              <div className="slider-slide">
                <div
                  className="flex flex-col gap-4 sm:gap-5 pt-8 sm:pt-[58px] pl-6 sm:pl-[64px] pb-6 sm:pb-[47px] bg-black bg-cover bg-center rounded-lg min-h-[300px] sm:min-h-[400px]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bannerimgone})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <FaApple className="text-[32px] sm:text-[40px] text-white" />
                    <p className="text-[14px] sm:text-[16px] font-poppins text-white">
                      iPhone 14 Series
                    </p>
                  </div>
                  <h1 className="w-full sm:w-[259px] text-[32px] sm:text-[40px] lg:text-[48px] font-inter font-semibold text-white leading-tight">
                    Up to 10% off Voucher
                  </h1>
                  <Link
                    className="w-[115px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2 group"
                    to={"/shop"}
                  >
                    <p className="text-[14px] sm:text-[16px] text-white font-medium font-poppins group-hover:translate-x-1 transition-transform duration-300">
                      Shop Now
                    </p>
                    <IoMdArrowForward className="text-[20px] sm:text-[24px] text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="slider-slide">
                <div
                  className="flex flex-col gap-4 sm:gap-5 pt-8 sm:pt-[58px] pl-6 sm:pl-[64px] pb-6 sm:pb-[47px] bg-black bg-cover bg-center rounded-lg min-h-[300px] sm:min-h-[400px]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bannerimgtwo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <FaApple className="text-[32px] sm:text-[40px] text-white" />
                    <p className="text-[14px] sm:text-[16px] font-poppins text-white">
                      iPhone 14 Series
                    </p>
                  </div>
                  <h1 className="w-full sm:w-[259px] text-[32px] sm:text-[40px] lg:text-[48px] font-inter font-semibold text-white leading-tight">
                    Get the Best Deals!
                  </h1>
                  <Link
                    className="w-[115px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2 group"
                    to={"/shop"}
                  >
                    <p className="text-[14px] sm:text-[16px] text-white font-medium font-poppins group-hover:translate-x-1 transition-transform duration-300">
                      Shop Now
                    </p>
                    <IoMdArrowForward className="text-[20px] sm:text-[24px] text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
