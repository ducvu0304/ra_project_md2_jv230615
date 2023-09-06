/* eslint-disable react/prop-types */
import React, { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";

const Sort = ({ setSortType }) => {
  const [showSorts, setShowSorts] = useState(false);

  return (
    <div className="relative ">
      <div className="w-full flex justify-end">
        <button
          onClick={() => setShowSorts(!showSorts)}
          className="
              w-[170px]
              flex justify-center items-center bg-gray-800 text-white text-base font-normal cursor-pointer py-1 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 
              md:w-[200px] md:py-2
              "
        >
          <SortIcon />
          <span className="ml-3">Sort</span>
        </button>
      </div>

      <div
        className={`absolute z-10 flex justify-center w-full bg-slate-200 text-gray-600`}
      >
        <div
          className={`${
            showSorts ? "block" : "hidden"
          } text-sm  w-full text-slate-900  mt-1 z-10 md:text-lg`}
        >
          <div
            onClick={() => setSortType("HightToLow")}
            className="w-full pl-5 py-2 transition-colors duration-75 ease-in-out cursor-pointer hover:bg-gray-600 hover:text-white"
          >
            Price Hight to Low
          </div>
          <div
            onClick={() => setSortType("LowToHight")}
            className="w-full pl-5 py-2 transition-colors duration-75 ease-in-out cursor-pointer hover:bg-gray-600 hover:text-white"
          >
            Price Low to Hight
          </div>
          <div
            onClick={() => setSortType("AToZ")}
            className="w-full pl-5 py-2 transition-colors duration-75 ease-in-out cursor-pointer hover:bg-gray-600 hover:text-white"
          >
            Name A <i className="fa-solid fa-arrow-right"></i> Z
          </div>
          <div
            onClick={() => setSortType("ZToA")}
            className="w-full pl-5 py-2 transition-colors duration-75 ease-in-out cursor-pointer hover:bg-gray-600 hover:text-white"
          >
            Name Z <i className="fa-solid fa-arrow-right"></i> A
          </div>
          {/* <div className="w-full pl-5 transition-colors duration-75 ease-in-out cursor-pointer hover:bg-gray-600 hover:text-white">
            New Arrivals
          </div>
          <div className="w-full pl-5 transition-colors duration-75 ease-in-out cursor-pointer hover:bg-gray-600 hover:text-white">
            Sale
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Sort;
