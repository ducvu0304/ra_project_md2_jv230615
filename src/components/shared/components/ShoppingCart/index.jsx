import MobileCart from "./mobile";
import LaptopCart from "./laptop";
import { useSelector } from "react-redux";
import CheckOutForm from "../CheckoutForm";
import { useState } from "react";
import Alert from "@elements/alert";
import './shopping-cart.css'

export default function ShoppingCart() {
  const cartProducts = useSelector((store) => store.cart.products);
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleCheckOut = () => {
    if (isLoggedIn) {
      setShowCheckOut(!showCheckOut);
    } else {
      setShowAlert(!showAlert);
    }
  };

  return (
    <div className="relative">
      <div className="alert">
        {showAlert ? (
          <Alert showAlert={showAlert} setShowAlert={setShowAlert} message={'Login for Checkout !'} />
        ) : (
          ""
        )}
      </div>
      <div className="block lg:hidden">
        <MobileCart cartProducts={cartProducts} />
      </div>
      <div className="hidden lg:block">
        <LaptopCart
          cartProducts={cartProducts}
          handleCheckOut={handleCheckOut}
        />
      </div>
      <div className="w-full absolute top-0 ">
        {showCheckOut ? <CheckOutForm /> : ""}
        <div className="absolute top-5 right-10 ">
          <div
            onClick={() => setShowCheckOut(!showCheckOut)} 
            className="text-white text-2xl cursor-pointer"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
