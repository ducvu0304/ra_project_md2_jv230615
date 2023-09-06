import avatar from "@icons/user.png";
import cart from "@icons/shopping-cart.png";
import "./account.css";
import { getCookie } from "@Js";
import { Link } from "react-router-dom";
import { decodeValue } from "@Js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../../store/slices/auth.slice";

export default function Account() {
  const [account, setAccount] = useState({});
  const token = localStorage.getItem("token") || "";

  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const cartProducts = useSelector((store) => store.cart.products);

  useEffect(() => {
    if (token) {
      const user = decodeValue(token);
      setAccount(user);
    }
  }, [auth.isLoggedIn]);

  return (
    <div className="flex items-center">
      <div className="flex justify-center items-center w-24 h-[80px] mx-5 border-l-[1px] border-r-[1px] ">
        <Link to="/shopping-cart">
          <div className="product-cart relative cursor-pointer w-10 h-1/2 lg:w-8 lg:h-8">
            <p className="absolute top-[-2px] right-[-6px]  bg-red-600 text-white text-center rounded-full text-xs w-5 h-5">
              {cartProducts.length}
            </p>
            <img src={cart} alt="cart-icon" className="w-full h-full" />
            <div className="view-cart bg-gray-100 rounded-md  text-xs border-[1px] border-slate-700 py-1 w-[60px] text-center ">
              View Cart
            </div>
          </div>
        </Link>
      </div>

      <div className="flex">
        <img src={avatar} alt="avatar" className="w-10 lg:w-8" />
        <div className="flex items-center mr-2">
          {auth.isLoggedIn ? (
            <p className="ml-3">
              {account.firstName},
              <span
                onClick={() => dispatch(authActions.logout())}
                className="hover:underline cursor-pointer"
              >
                Logout
              </span>
            </p>
          ) : (
            <Link to="/login">
              <p className="ml-4 cursor-pointer">Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
