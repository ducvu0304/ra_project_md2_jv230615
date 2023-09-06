/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import Product from "./product";
import CheckOut from "./chekout";

export default function MobileCart({ cartProducts }) {
  return (
    <div className="py-8">
      <p className="text-center mb-8 text-3xl font-semibold text-blue-900">
        Your Cart
      </p>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full mb-6 ">
          {cartProducts.length > 0
            ? cartProducts.map((item) => (
                <Product key={item.id} product={item} />
              ))
            : ""}
          {/* <Product /> */}
        </div>
        <div className="mx-4">
          <CheckOut cartProducts={cartProducts} />
        </div>
      </div>
    </div>
  );
}
