import React from "react";
import Product from "../../mobile/product";
import CheckOutProduct from "../CheckOutProduct";

export default function CheckOutForm() {
  return (
    <div className="flex justify-center bg-blue-600">
      {/* container */}
      <div className="flex h-[800px]  rounded-lg my-10">
        {/* Left */}
        <div className="bg-[#0c2543] px-6 h-full w-[600px] flex flex-col justify-center  items-center">
          <CheckOutProduct />
          <CheckOutProduct />
          <CheckOutProduct />
        </div>
        {/* Right */}
        <div className="bg-white px-10">
          <p>Payments</p>
        </div>
      </div>
    </div>
  );
}
