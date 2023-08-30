import React, { useState } from "react";
import "./product-detail.css";

export default function ProductDetail() {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="mb-10">
      <div className="mx-16 grid gap-8 grid-cols-1 lg:grid-cols-2 ">
        {/* ========Left-Pane======== */}
        <div className="">
          <div className="h-[400px] flex justify-center">
            <img
              className="h-full"
              src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B698_800_0020050130_RT_Large.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            <img
              className="w-[200px] border-gray-300 border-[1px] p-2 cursor-pointer"
              src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B698_800_0020050130_RT_Large.jpg"
              alt=""
            />
            <img
              className="w-[200px] border-gray-300 border-[1px] p-2 cursor-pointer"
              src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B698_800_0020050130_RT_Large.jpg"
              alt=""
            />
            <img
              className="w-[200px] border-gray-300 border-[1px] p-2 cursor-pointer"
              src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B698_800_0020050130_RT_Large.jpg"
              alt=""
            />
          </div>
        </div>

        {/* ========Right-Pane======== */}
        <div className="bg-[#cdced1] text-gray-800 py-10">
          <div className="mx-5">
            {/* ========Header======== */}
            <div className="grid grid-cols-1 gap-y-1">
              <p className="text-3xl font-bold mb-1">Sport Shoes</p>
              <div>
                <i className="fa-solid fa-star mr-2 text-yellow-300"></i>
                <i className="fa-solid fa-star mr-2 text-yellow-300"></i>
                <i className="fa-solid fa-star mr-2 text-yellow-300"></i>
                <i className="fa-solid fa-star mr-2 text-yellow-300"></i>
                {/* <i className="fa-solid fa-star mr-2 text-yellow-300"></i> */}
                <i className="fa-regular fa-star-half-stroke text-yellow-300"></i>
              </div>
              <div>
                <p className="font-bold">$150</p>
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
                  running. Whether you are sprinting everyday miles or on your
                  long run, feel the spring in your step with the same cushioned
                  support as its predecessor.
                </p>
              </div>

              {/* ========Option Group======== */}
              <div>
                {/* Size */}
                <div className="my-5">
                  <p className="text-2xl font-bold mb-4">Size</p>
                  <ul className="flex">
                    <li>
                      <div className="text-center text-sm pt-1 cursor-pointer w-7 h-7 rounded-full border-gray-500 border-[1px] mr-2">
                        Sm
                      </div>
                    </li>
                    <li>
                      <div className="text-center text-sm pt-1 cursor-pointer w-7 h-7 rounded-full border-gray-500 border-[1px] mr-2">
                        M
                      </div>
                    </li>
                    <li>
                      <div className="active text-center text-sm pt-1 cursor-pointer w-7 h-7 rounded-full border-gray-500 border-[1px] mr-2">
                        L
                      </div>
                    </li>
                    <li>
                      <div className="text-center text-sm pt-1 cursor-pointer w-7 h-7 rounded-full border-gray-500 border-[1px] mr-2">
                        Xl
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* =======Button-Group====== */}
              <div className="w-full">
                <button className="w-full h-9 bg-primary-v1 text-white hover:text-lg hover:bg-blue-700 ">
                  Add to cart
                </button>
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
                The Body Shoe is designed to support the natural movement of
                your body.
              </p>
              <p>Composition: 100% calf leather, inside: 100% lamb leather</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
