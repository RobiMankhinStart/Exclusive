import { useEffect, useState } from "react";
import axios from "axios";
import ShopCard from "../Components/shop/ShopCard";
import { useDispatch } from "react-redux";
import { addTocart } from "../ProductSlice";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // api fetching
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(products);

  // add to cart function
  const addToCart = (item) => {
    const proDuctids = JSON.parse(localStorage.getItem("proDUCTid")) || [];
    proDuctids.push(item);
    localStorage.setItem("proDUCTid", JSON.stringify(proDuctids));
    dispatch(addTocart(item));
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

          <h3 className="mt-12 mb-10 text-[36px] font-inter font-semibold">
            Explore Our Products
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {products.map((item) => (
              <ShopCard
                key={item.id}
                addToCart={() => addToCart(item.id)}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
