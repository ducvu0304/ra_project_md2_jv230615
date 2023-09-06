/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

export default function ProductImage({ product }) {
  // const [productImage, setProductImage] = useState('')
  // console.log(productImage);

  return (
    <div className="px-10 pb-5">
      <div className="h-[400px] flex justify-center border-[1px] mb-10 px-6">
        <img
          className="h-full"
          src={
            product.img
              ? product.img
              : "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B698_800_0020050130_RT_Large.jpg"
          }
          alt="product-image"
        />
      </div>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-3 gap-x-3">
          <img
            className="w-[200px] border-gray-300 border-[1px] p-2 cursor-pointer"
            src={
              product.img
                ? product.img
                : "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B698_800_0020050130_RT_Large.jpg"
            }
            alt="product-image"
          />
          <img
            className="w-[200px] border-gray-300 border-[1px] p-2 cursor-pointer"
            src={
              product.img
                ? product.img
                : "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B698_800_0020050130_RT_Large.jpg"
            }
            alt="product-image"
          />
          <img
            className="w-[200px] border-gray-300 border-[1px] p-2 cursor-pointer"
            src={
              product.img
                ? product.img
                : "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B698_800_0020050130_RT_Large.jpg"
            }
            alt="product-image"
          />
        </div>
      </div>
    </div>
  );
}
