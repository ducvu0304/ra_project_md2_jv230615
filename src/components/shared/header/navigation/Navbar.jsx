import React from "react";
import Categories from "./components/Categories";
import Navigation from "./components/Navigation";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <Categories />
        <Navigation />
      </div>
    </nav>
  );
};
export default Navbar;
