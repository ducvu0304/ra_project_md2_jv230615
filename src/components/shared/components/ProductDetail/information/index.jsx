/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeVND } from "@Js";

import Button from "@elements/button";
import { Navigate } from "react-router-dom";

export default function ProductInformation({ product, handleAddToCart }) {
  const [isLike, setIsLike] = useState(false);
  const [size, setSize] = useState({
    small: false,
    medium: false,
    large: true,
    xLarge: false,
  });

  const hanldeSetSize = (type) => {
    const { small, medium, large, xLarge } = size;
    switch (type) {
      case "small":
        setSize({
          small: !size.small,
          medium: false,
          large: false,
          xLarge: false,
        });
        break;
      case "medium":
        setSize({
          small: false,
          medium: true,
          large: false,
          xLarge: false,
        });
        break;
      case "large":
        setSize({
          small: false,
          medium: false,
          large: true,
          xLarge: false,
        });
        break;
      case "xLarge":
        setSize({
          small: false,
          medium: false,
          large: false,
          xLarge: true,
        });
        break;
      default:
        setSize({
          small: false,
          medium: false,
          large: true,
          xLarge: false,
        });
        break;
    }
  };

  return (
    <div className="pane bg-white text-gray-800 pb-10 pt-5">
      <div className="mx-5">
        {/* ========Header======== */}
        <div className="grid grid-cols-1 gap-y-1">
          <p className="text-3xl font-bold mb-1">
            {product.name ? product.name : "Sport Shoes"}
          </p>
          <div>
            <i className="fa-solid fa-star mr-2 text-yellow-300"></i>
            <i className="fa-solid fa-star mr-2 text-yellow-300"></i>
            <i className="fa-solid fa-star mr-2 text-yellow-300"></i>
            <i className="fa-solid fa-star mr-2 text-yellow-300"></i>
            {/* <i className="fa-solid fa-star mr-2 text-yellow-300"></i> */}
            <i className="fa-regular fa-star-half-stroke text-yellow-300"></i>
          </div>
          <div>
            <p className="font-bold">
              {product.price ? changeVND(product.price) : "0"} đ
            </p>
            <p className="text-sm ">
              In Stock
              <i className="fa-solid fa-check ml-2 text-green-500"></i>
            </p>
          </div>
        </div>
        {/* ========Body======== */}
        <div>
          {/* ========Description======== */}
          <div className="my-5">
            <p className="text-2xl font-bold mb-4">Description</p>
            <p className="text-sm">
              The road is your runway. Get ready to take flight in the most
              comfortable shoes. Back with extra bounce which is perfect for
              running. Whether you are sprinting everyday miles or on your long
              run, feel the spring in your step with the same cushioned support
              as its predecessor.
            </p>
          </div>

          {/* ========Option Group======== */}
          <div>
            {/* Size */}
            {/* <div className="my-5">
              <p className="text-2xl font-bold mb-4">Size</p>
              <ul className="flex">
                <li>
                  <div 
                    onClick={() => hanldeSetSize('small')}
                    className={`${size.small ? 'active' : ''} text-center text-sm pt-1 cursor-pointer w-7 h-7 rounded-full border-gray-500 border-[1px] mr-2`}>
                    Sm
                  </div>
                </li>
                <li>
                  <div className={`${size.medium ? 'active' : ''} text-center text-sm pt-1 cursor-pointer w-7 h-7 rounded-full border-gray-500 border-[1px] mr-2`}>
                    M
                  </div>
                </li>
                <li>
                  <div className={`${size.large ? 'active' : ''} active text-center text-sm pt-1 cursor-pointer w-7 h-7 rounded-full border-gray-500 border-[1px] mr-2`}>
                    L
                  </div>
                </li>
                <li>
                  <div className={`${size.xLarge ? 'active' : ''} text-center text-sm pt-1 cursor-pointer w-7 h-7 rounded-full border-gray-500 border-[1px] mr-2`}>
                    Xl
                  </div>
                </li>
              </ul>
            </div> */}
          </div>

          {/* =======Button-Group====== */}
          <div className="w-full">
            <div onClick={() => handleAddToCart(product.id)}>
              <Button value="Add to cart" />
            </div>
            <div className="flex justify-between my-3 gap-x-2">
              <button className="text-sm h-9 border-[1px] border-gray-500 w-full bg-white">
                <i className="fa-solid fa-location-dot mr-2 text-amber-900 "></i>
                Find in store
              </button>
              <button
                onClick={() => setIsLike(!isLike)}
                className="text-sm h-9 border-[1px] border-gray-500 w-full bg-white"
              >
                {isLike ? (
                  <i className="fa-solid fa-heart mr-2 text-red-600"></i>
                ) : (
                  <i className="fa-regular fa-heart mr-2 "></i>
                )}
                Favorite
              </button>
            </div>
          </div>
        </div>

        {/* =======Footer===== */}
        {/* Heading */}
        <div className="h-10 mt-8 flex justify-between items-center text-base font-semibold border-b-white border-b-[1px] ">
          <p>Product Information</p>
          <p>Size Chart</p>
          <p>Shopping & Returns</p>
        </div>

        {/* More Information */}
        <div className="mt-4 text-sm ">
          <p>Product Code : 8BN321AF2IF0NYA</p>
          <p>Product type</p>
          <p>Removable Bounce : ECO footbed </p>
          <p>
            The Body Shoe is designed to support the natural movement of your
            body.
          </p>
          <p>Composition: 100% calf leather, inside: 100% lamb leather</p>
        </div>
      </div>
    </div>
  );
}
