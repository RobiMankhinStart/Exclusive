import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FlashSaleCard from "./FlashSaleCard";
import { Link } from "react-router";
import { addTocart } from "../../ProductSlice";
import { useDispatch } from "react-redux";

const FlashSales = ({ products }) => {
  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const dispatch = useDispatch();

  // add to cart function
  const addToCart = (item) => {
    const proDuctids = JSON.parse(localStorage.getItem("proDUCTid")) || [];
    proDuctids.push(item);
    localStorage.setItem("proDUCTid", JSON.stringify(proDuctids));
    dispatch(addTocart(item));
  };

  return (
    <div className="pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mainDiv">
          {/* Header Section */}
          <div className="flex gap-4 items-center rounded-[4px]">
            <div className="w-3 sm:w-4 lg:w-5 h-6 sm:h-8 lg:h-10 bg-[#DB4444]"></div>
            <h3 className="font-semibold font-poppins text-sm sm:text-[15px] lg:text-[16px] text-[#DB4444]">
              Today's
            </h3>
          </div>

          {/* Title and Timer Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-8 sm:mt-10 lg:mt-12 mb-8 sm:mb-10 gap-4 sm:gap-6">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-inter font-semibold text-center sm:text-left">
              Flash Sales
            </h3>

            {/* Timer */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-[17px]">
              <div className="text-center">
                <p className="text-xs sm:text-sm font-medium font-poppins">
                  Days
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-inter">
                  03
                </h3>
              </div>
              <p className="text-[#E07575] text-xl sm:text-2xl lg:text-3xl font-bold">
                :
              </p>
              <div className="text-center">
                <p className="text-xs sm:text-sm font-medium font-poppins">
                  Hours
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-inter">
                  23
                </h3>
              </div>
              <p className="text-[#E07575] text-xl sm:text-2xl lg:text-3xl font-bold">
                :
              </p>
              <div className="text-center">
                <p className="text-xs sm:text-sm font-medium font-poppins">
                  Minutes
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-inter">
                  59
                </h3>
              </div>
              <p className="text-[#E07575] text-xl sm:text-2xl lg:text-3xl font-bold">
                :
              </p>
              <div className="text-center">
                <p className="text-xs sm:text-sm font-medium font-poppins">
                  Seconds
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-inter">
                  56
                </h3>
              </div>
            </div>
          </div>

          {/* Slider Section */}
          <div className="slider-container px-2 sm:px-0">
            <Slider {...settings}>
              {products?.slice(0, 9).map((item) => (
                <div key={item.id} className="px-2 sm:px-3">
                  <FlashSaleCard
                    addToCart={() => addToCart(item.id)}
                    item={item}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* View All Button */}
          <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center border-b border-[#b3b3b3] pb-8 sm:pb-12 lg:pb-[60px]">
            <Link
              to={"/shop"}
              className="hover:bg-[#c03232] hover:scale-105 active:scale-95 duration-300 text-base sm:text-lg font-poppins font-medium text-white px-8 sm:px-12 py-3 sm:py-4 bg-[#DB4444] rounded-md w-full sm:w-auto text-center"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
