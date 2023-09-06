import React from "react";
import logo from "@images/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link to="/">
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="logo" className="w-[80px]" />
          <p className="ml-2 text-4xl">Luxe</p>
        </div>
      </Link>
    </>
  );
}
