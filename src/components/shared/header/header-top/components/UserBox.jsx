import React from "react";

const UserBox = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="#"
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-regular fa-heart" />
        </div>
        <div className="text-xs leading-3">Wishlist</div>
        <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          8
        </div>
      </a>
      <a
        href="#"
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-solid fa-bag-shopping" />
        </div>
        <div className="text-xs leading-3">Cart</div>
        <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          2
        </div>
      </a>
      <a
        href="#"
        className="text-center text-gray-700 hover:text-primary transition relative"
      >
        <div className="text-2xl">
          <i className="fa-regular fa-user" />
        </div>
        <div className="text-xs leading-3">Account</div>
      </a>
    </div>
  );
};

export default UserBox;
