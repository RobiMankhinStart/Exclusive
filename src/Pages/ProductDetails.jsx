import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router";
import RelatedItems from "../Components/ProductDetails/RelatedItems";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  // api fetching
  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        const productData = res.data;
        setProduct(productData);
        if (productData.images && productData.images.length > 0) {
          setMainImage(productData.images[0]);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(product);
  if (!product) return <div className="p-6 text-center">Loading...</div>;
  return (
    <div>
      <div className="container">
        <div className="mainDiv">
          <div className="mt-[80px] mb-[140px] flex flex-col md:flex-row gap-10">
            {/* Left: Images */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-3">
                {product.images.map((img, index) => (
                  <div
                    className={`w-[170px] border bg-[#F5F5F5] rounded-md flex items-center justify-center ${
                      mainImage === img
                        ? "border-[#be9393]"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      key={index}
                      src={img}
                      alt={product.title}
                      onClick={() => setMainImage(img)}
                      className={`w-[121px] object-cover rounded-lg cursor-pointer  `}
                    />
                  </div>
                ))}
              </div>
              <div className="bg-[#F5F5F5] w-[500px] flex items-center justify-center rounded-md ">
                <img
                  src={mainImage}
                  alt={product.title}
                  className="w-[400px] h-[440px] object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{product.title}</h2>
                <p className="text-gray-500 mt-1">{product.brand}</p>
                <p className="text-lg font-bold mt-3">${product.price}</p>
                <p className="mt-3 text-gray-600">{product.description}</p>

                {/* Size Example */}
                <div className="mt-5">
                  <h3 className="font-medium mb-2">Size:</h3>
                  <div className="flex gap-2">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className="border border-gray-300 px-3 py-1 rounded hover:bg-black hover:text-white transition"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4 items-center">
                  <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                    Add To Cart
                  </button>
                  <button className="p-3 border rounded-full hover:bg-gray-100">
                    <FaHeart className="text-red-500" />
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mt-8 border-t pt-4">
                <p className="font-medium">Free Delivery</p>
                <p className="text-gray-500 text-sm">30 Days Return Policy</p>
              </div>
            </div>
          </div>
          <RelatedItems product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
