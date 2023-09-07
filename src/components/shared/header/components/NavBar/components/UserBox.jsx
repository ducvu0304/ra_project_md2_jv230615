import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import cart from "@icons/shopping-cart.png";
import avatar from "@icons/user.png";
import { authActions } from "@store/auth.slice";
import { decodeValue } from "@Js";

export default function UserBox() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token") || "";

  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  useEffect(() => {
    if (token) {
      const userInfo = decodeValue(token);
      setIsLoggedIn(true);
      setUser(userInfo);
    } else {
      setIsLoggedIn(false);
    }
  }, [auth.isLoggedIn]);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="mb-5">
      {isLoggedIn ? (
        <div className="flex text-sm">
          <p className="">Hello {user.firstName}</p>
          <div onClick={handleLogout} className="cursor-pointer">
            (Logout)
          </div>
        </div>
      ) : (
        <Link to="/login">
          <p className="text-base font-sans cursor-pointer text-right">Login</p>
        </Link>
      )}

      <div className="hidden md:flex justify-end space-x-4 mt-3">
        <div className="relative">
          <p className="absolute top-[-6px] right-[-6px]  bg-red-600 text-white text-center rounded-full text-xs w-4">
            0
          </p>
          <img className="w-5 h-5" src={cart} alt="cart" />
        </div>
        <img
          className="border-[1px] rounded-full w-5 h-5"
          src={
            isLoggedIn
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RD3JH1gsANSkPGsUQY86tbErATUK2pJidufH5ydo4A&s"
              : `${avatar}`
          }
          alt=""
        />
      </div>
    </div>
  );
}
