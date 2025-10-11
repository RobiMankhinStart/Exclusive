import React, { useEffect, useState } from "react";
import Banner from "../Components/Home/Banner";
import FlashSales from "../Components/Home/FlashSales";
import axios from "axios";
import Categories from "../Components/Home/Categories";
import BestSelling from "../Components/Home/BestSelling";

const Home = () => {
  const [products, setProducts] = useState([]);

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
  return (
    <div>
      <Banner products={products} />
      <FlashSales products={products} />
      <Categories products={products} />
      <BestSelling products={products} />
    </div>
  );
};

export default Home;
