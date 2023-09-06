/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { changeVND } from "@Js";

export default function Product({ item, handleAddToCart, handleViewProduct }) {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="grid grid-cols-2 ">
      {/* Product-Image */}
      <div className="flex  justify-center items-center ">
        <div className="bg-stone-100">
          <img
            className="w-full h-full object-cover py-8 px-5 "
            src={item.image}
            alt="product-image"
          />
        </div>
      </div>
      {/* Product-Information */}
      <div className="flex items-center">
        <div className="flex flex-col justify-between w-full pl-5 xl:py-14 ">
          {/* Information */}
          <div className="mb-5">
            <p className="text-[16px] font-semibold xl:text-xl">{item.name}</p>
            <p className="flex gap-x-1 text-[10px] text-yellow-400 my-1 xl:text-sm">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
            <p className="text-xs xl:text-lg">{changeVND(item.price)} đ</p>
          </div>
          {/* Icon */}
          <div className="flex items-center gap-x-1  ">
            <div
              onClick={() => setIsLike(!isLike)}
              className="cursor-pointer flex items-center justify-center bg-orange-100 rounded-md text-sm text-slate-600 w-8 h-8 xl:w-12 xl:h-12 xl:text-lg"
            >
              {isLike ? (
                <i className="fa-solid fa-heart text-red-700"></i>
              ) : (
                <i className="fa-regular fa-heart p-2 hover:text-red-700"></i>
              )}
            </div>
            <div className="cursor-pointer flex items-center justify-center bg-orange-100 rounded-md text-slate-600 w-8 h-8 xl:w-12 xl:h-12">
              <span
                onClick={() => handleAddToCart(item.id)}
                className="material-symbols-outlined  text-[18px] xl:text-2xl hover:text-red-700"
              >
                shopping_bag
              </span>
            </div>
            <div
              onClick={() => handleViewProduct(item.id)}
              className="cursor-pointer text-sm flex items-center justify-center bg-orange-100 rounded-md text-slate-600 w-8 h-8 xl:w-12 xl:h-12 xl:text-lg"
            >
              <i className="fa-regular fa-eye hover:text-red-700"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
