import React, { useState, useEffect } from "react";
import Product from "./Product";
import { productList } from "./productList";
import Toast from "@elements/toast";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@store/cart.slice";
import { productActions } from "@store/product.slice";
import "@css/index.css";
import { Navigate } from "react-router-dom";

export default function TopSeller() {
  const [isNavigate, setIsNavigate] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);

    dispatch(cartActions.addToCart(id));
  };

  const handleViewProduct = (id) => {
    dispatch(productActions.view(id));
    setIsNavigate(!isNavigate);
  };

  return (
    <div className="relative">
      <div className="flex justify-center mb-10">
        <div className="w-[80%] xl:w-[86%]">
          {/* Heading */}
          <div className="text-center px-4 mb-8">
            <p className="text-4xl text-blue-900 font-semibold mb-1">
              TOP SELLER
            </p>
            <p className="text-lg text-gray-600  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {/* Block */}
          <div className="flex justify-between">
            {/* Banner */}
            <div className="hidden lg:hidden xl:block xl:w-[40%]">
              <img
                className="w-full h-full object-cover xl:py-16 2xl:py-8"
                src="https://www.verywellfit.com/thmb/_rd10oWk4zMn2npT30nW9Hjqv48=/1280x854/filters:fill(FFDB5D,1)/131249663-56a8150a3df78cf7729bf5a8.jpg"
                alt=""
              />
            </div>
            {/* Product */}
            <div className="ml-5 flex-1 grid grid-cols-1 gap-5 md:grid-cols-2">
              {productList.map((item) => (
                <Product
                  key={item.id}
                  item={item}
                  handleAddToCart={handleAddToCart}
                  handleViewProduct={handleViewProduct}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Toast */}

      <div
        className={`absolute left-[40%] bottom-[30px] z-50 show ${
          showToast ? "block" : "hidden"
        }`}
        id="snackbar"
      >
        <Toast message={"Add to cart successfully!"} />
      </div>
      {isNavigate ? <Navigate to="/detail" /> : ""}
    </div>
  );
}
