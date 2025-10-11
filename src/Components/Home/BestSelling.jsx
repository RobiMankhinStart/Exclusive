import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FlashSaleCard from "./FlashSaleCard";
import { Link } from "react-router";
const BestSelling = ({ products }) => {
  // slider settings ..........
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-[140px]">
      <div className="container">
        <div className="mainDiv">
          <div className="flex gap-4 items-center rounded-[4px]">
            <div className="w-5 h-10 bg-[#DB4444]"></div>
            <h3 className="font-semibold font-poppins text-[16px] text-[#DB4444]">
              This Month
            </h3>
          </div>
          <div className=" flex items-center justify-between mt-12 mb-10 gap-[87px]">
            <h3 className="text-[36px] font-inter font-semibold">
              Best Selling Products
            </h3>
            {/* <div className="flex items-center gap-[17px] "> */}
            <Link
              to={"/shop"}
              className="hover:bg-[#c03232] hover:scale-110 duration-300 text-lg font-poppins font-medium text-white px-12 py-4 bg-[#DB4444] rounded-md "
            >
              View All
            </Link>
            {/* </div> */}
          </div>
          {/* .............slider......  */}
          <Slider {...settings}>
            {products.slice(9, 15).map((item) => (
              <FlashSaleCard key={item.id} item={item} />
            ))}
          </Slider>
          {/* ....slider ....... */}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
