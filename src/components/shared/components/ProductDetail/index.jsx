import "./product-detail.css";
import "@css/index.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "@store/product.slice";
import { cartActions } from "@store/cart.slice";
import Toast from "../../../elements/toast";
import ProductImage from "./image";
import ProductInformation from "./information";

export default function ProductDetail() {
  const [showToast, setShowToast] = useState(false);
  const item = useSelector((store) => store.product.item);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);

    dispatch(cartActions.addToCart(id));
  };

  useEffect(() => {
    dispatch(productActions.setIsSearchValue());
  }, []);

  return (
    <div className="relative my-10 ">
      <div
        className={`absolute left-[40%] bottom-[30px] show ${
          showToast ? "block" : "hidden"
        }`}
        id="snackbar"
      >
        <Toast message={"Add to cart successfully!"} />
      </div>
      <div className="mx-20 grid gap-8 grid-cols-1 lg:grid-cols-2 ">
        <ProductImage product={item ? item : ""} />
        <ProductInformation
          product={item ? item : ""}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}
