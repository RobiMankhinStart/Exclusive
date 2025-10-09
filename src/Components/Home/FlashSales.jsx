import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import FlashSaleCard from "./FlashSaleCard";
const FlashSales = () => {
  const [products, setProducts] = useState([]);
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

  // api fetching
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(products);
  return (
    <div>
      <div className="container">
        <div className="mainDiv">
          <div className="flex gap-4 items-center rounded-[4px]">
            <div className="w-5 h-10 bg-[#DB4444]"></div>
            <h3 className="font-semibold font-poppins text-[16px] text-[#DB4444]">
              Today's
            </h3>
          </div>
          <div className=" flex items-center mt-12 mb-10 gap-[87px]">
            <h3 className="text-[36px] font-inter font-semibold">
              Flash Sales
            </h3>
            <div className="flex items-center gap-[17px] ">
              <div>
                <p className="text-sm font-medium font-poppins">Days</p>
                <h3 className="text-3xl font-bold font-inter">03</h3>
              </div>
              <p className="text-[#E07575] text-3xl font-bold">:</p>
              <div>
                <p className="text-sm font-medium font-poppins">Hours</p>
                <h3 className="text-3xl font-bold font-inter">03</h3>
              </div>
              <p className="text-[#E07575] text-3xl font-bold">:</p>
              <div>
                <p className="text-sm font-medium font-poppins">Minutes</p>
                <h3 className="text-3xl font-bold font-inter">03</h3>
              </div>
              <p className="text-[#E07575] text-3xl font-bold">:</p>
              <div>
                <p className="text-sm font-medium font-poppins">Seconds</p>
                <h3 className="text-3xl font-bold font-inter">03</h3>
              </div>
            </div>
          </div>
          {/* .............slider......  */}
          <Slider {...settings}>
            {products.slice(0, 9).map((item) => (
              <FlashSaleCard key={item.id} />
            ))}
          </Slider>
          {/* ....slider ....... */}
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
