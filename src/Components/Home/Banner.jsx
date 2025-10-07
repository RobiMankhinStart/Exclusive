import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";

import bannerimgone from "../../assets/bannerSliderImg1.png";
import bannerimgtwo from "../../assets/bannerSliderImg2.png";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router";
import Slider from "react-slick";

const Banner = () => {
  // const imgOne = new URL("../../assets/bannerSliderImg1.png", import.meta.url)
  //   .href;
  // const imgTwo = new URL("../../assets/bannerSliderImg2.png", import.meta.url)
  //   .href;
  const settings = {
    dots: true,
    // fade: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div>
      <div className="container pb-[140px]">
        <div className="mainDiv flex justify-between ">
          <div className="border-r border-[#b3b3b3] pr-6">
            <div className="category  pt-10 flex flex-col  gap-4">
              <div className="text-lg font-poppins text-black flex justify-between items-center  w-[217px]">
                Woman’s Fashion
                <IoIosArrowForward className="pt-[2px] text-[24px]" />
              </div>
              <div className="text-lg font-poppins text-black flex justify-between items-center  w-[217px]">
                Man’s Fashion
                <IoIosArrowForward className="pt-[2px] text-[24px]" />
              </div>
              <div className="text-lg font-poppins text-black flex justify-between items-center  w-[217px]">
                Electronics
              </div>
            </div>
          </div>
          <div className="pt-10 w-[892px]">
            <Slider {...settings}>
              {/* Slide 1 */}
              <div
                className="sliderDiv   h-[400px] flex flex-col gap-5 pt-[58px] pl-[64px] pb-[47px] bg-black bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${bannerimgone})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex items-center gap-6">
                  <FaApple className="text-[40px] text-white" />
                  {/* <img src={imgOne} alt="" /> */}
                  <p className="text-[16px] font-poppins text-white">
                    iPhone 14 Series
                  </p>
                </div>
                <h1 className="w-[259px] text-[48px] font-inter font-semibold text-white">
                  Up to 10% off Voucher
                </h1>
                <Link
                  className="w-[115px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2"
                  to={"/shop"}
                >
                  <p className="text-[16px] text-white font-medium font-poppins">
                    Shop Now
                  </p>
                  <IoMdArrowForward className="text-[24px] text-white" />
                </Link>
              </div>

              {/* Slide 2 */}
              <div
                className="sliderDiv h-[400px] flex flex-col gap-5 pt-[58px] pl-[64px] pb-[47px] bg-black bg-cover bg-no-repeat bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${bannerimgtwo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex items-center gap-6">
                  <FaApple className="text-[40px] text-white" />
                  <p className="text-[16px] font-poppins text-white">
                    iPhone 14 Series
                  </p>
                </div>
                <h1 className="w-[259px] text-[48px] font-inter font-semibold text-white">
                  Get the Best Deals!
                </h1>
                <Link
                  className="w-[115px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2"
                  to={"/shop"}
                >
                  <p className="text-[16px] text-white font-medium font-poppins">
                    Shop Now
                  </p>
                  <IoMdArrowForward className="text-[24px] text-white" />
                </Link>
              </div>
            </Slider>
            {/* <div className="sliderDiv flex flex-col gap-5  pt-[58px] pl-[64px] pb-[47px] bg-black">
              <div className=" flex items-center gap-6">
                <FaApple className="text-[40px] text-white" />
                <p className="text-[16px] font-poppins text-white">
                  iPhone 14 Series
                </p>
              </div>
              <h1 className="w-[259px] text-[48px] font-inter font-semibold text-white">
                Up to 10% off Voucher
              </h1>
              <Link
                className="w-[115px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full   flex items-center gap-2"
                to={"/shop"}
              >
                <p className="text-[16px] text-white font-medium font-poppins">
                  Shop Now
                </p>
                <IoMdArrowForward className="text-[24px] text-white" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
