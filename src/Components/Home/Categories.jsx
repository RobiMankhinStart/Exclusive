import React from "react";
import { TbCategoryPlus } from "react-icons/tb";

const Categories = ({ products }) => {
  return (
    <div className="pb-[70px]">
      <div className="container">
        <div className="mainDiv">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#DB4444] w-5 h-10 rounded-md"></div>
            <h3 className="text-[#DB4444] font-semibold font-poppins text-[16px]">
              Categories
            </h3>
          </div>
          <h2 className="text-[36px] font-semibold font-inter mt-5 mb-14">
            Browse By Category
          </h2>
          <div className="flex items-center justify-center gap-[30px] border-b border-[#b3b3b3] pb-[70px] ">
            {[...new Set(products?.map((item) => item.category))].map((p) => (
              <div
                key={p}
                className="hover:bg-[#d8caca] uppercase cursor-pointer flex flex-col items-center justify-center w-[170px] h-[145px] rounded-md border border-[#b3b3b3]"
              >
                <TbCategoryPlus className="text-[50px]" />
                <p className="text-lg font-poppins">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
