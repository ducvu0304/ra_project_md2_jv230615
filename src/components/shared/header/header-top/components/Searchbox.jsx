import React from "react";

export default function Searchbox() {
  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-1 text-lg text-gray-400">
        <i className="fa-solid fa-magnifying-glass" />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full border border-primary border-r-0 pl-12 pr-3 rounded-l-md focus:outline-none hidden md:flex"
        placeholder="search"
      />
      <button className="bg-primary-v1 border border-primary text-white text-center px-8 pt-1 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
        Search
      </button>
    </div>
  );
}
