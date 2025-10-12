import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router";
import RelatedItemCard from "./RelatedItemCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { addTocart } from "../../ProductSlice";
import { useDispatch } from "react-redux";
const RelatedItems = ({ product }) => {
  // slider settings ..........
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const dispatch = useDispatch();

  const addToCartD = (item) => {
    const proDuctids = JSON.parse(localStorage.getItem("proDUCTid")) || [];
    proDuctids.push(item);
    localStorage.setItem("proDUCTid", JSON.stringify(proDuctids));
    dispatch(addTocart(item));
  };
  // fetching .............
  const [products, setProducts] = useState([]);

  // api fetching
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const resData = res.data.products;
        const relatedItem = resData.filter(
          (i) => i.category == product.category
        );
        setProducts(relatedItem);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(products);
  return (
    <div className="pb-20">
      <div className="container">
        <div className="mainDiv">
          <div className="mt-12 mb-10 flex gap-4 items-center rounded-[4px]">
            <div className="w-5 h-10 bg-[#DB4444]"></div>
            <h3 className="font-semibold font-poppins text-[16px] text-[#DB4444]">
              Related Items
            </h3>
          </div>

          {/* .............slider......  */}
          <Slider {...settings}>
            {products?.slice(0, 9).map((item) => (
              <RelatedItemCard
                addToCartD={() => addToCartD(item.id)}
                key={item.id}
                item={item}
              />
            ))}
          </Slider>
          {/* ....slider ....... */}
          <div className="mt-14  flex justify-center border-b border-[#b3b3b3] pb-[60px]">
            <Link
              to={"/shop"}
              className="hover:bg-[#c43434] hover:scale-110 duration-300 text-lg font-poppins font-medium text-white px-12 py-3 bg-[#DB4444] rounded-md "
            >
              Go to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedItems;
