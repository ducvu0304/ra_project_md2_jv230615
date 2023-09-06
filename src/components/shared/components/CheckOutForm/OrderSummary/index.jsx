/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Product from "../../ShoppingCart/mobile/product";
import Button from "@elements/button";
import { useSelector } from "react-redux";
import { changeVND } from "@Js";

export default function OrderSummary({ shipping }) {
  const [subTotal, setSubTotal] = useState(0);
  const products = useSelector((store) => store.cart.products);

  useEffect(() => {
    const number = products.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    setSubTotal(number);
  }, [products]);

  return (
    <div className="px-6 my-10 ">
      <p className="text-3xl font-istok_web mb-4 text-primary-v1">
        Order Summary
      </p>
      <div className="px-5 border-[1px] border-slate-300 rounded-2xl bg-white">
        <div className=" ">
          {products.length > 0 ? (
            products.map((item) => <Product key={item.id} product={item} />)
          ) : (
            <Product product={{}} />
          )}
        </div>
        {/*  */}
        <div className="">
          <div className="py-6">
            <div className="flex justify-between pt-2 pb-4 text-lg">
              <p>Subtotal</p>
              <p className="font-istok_web text-xl">
                {changeVND(subTotal.toString())}
                <span className="ml-1">đ</span>
              </p>
            </div>
            <div className="flex justify-between py-6 text-lg">
              <p>Cart discount</p>
              <p className="font-istok_web text-xl">
                0<span className="ml-1">đ</span>
              </p>
            </div>
            <div className="flex justify-between py-6 text-lg">
              <p>Shipping</p>
              <p className="font-istok_web text-xl">
                {changeVND(shipping.toString())}
                <span className="ml-1">đ</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between text-2xl font-istok_web py-6 border-t-[1px]">
            <p>Total</p>
            <p>
              {changeVND((subTotal - shipping).toString())}
              <span className="ml-1">đ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
