/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ value }) {
  return (
    // <button className="
    //   transition ease-in-out delay-150
    //   bg-blue-500
    //   hover:bg-indigo-500 duration-300">
    //   {value}
    // </button>
    // hover:-translate-y-1 hover:scale-110
    <div
      className="text-center py-3 px-2 rounded-md bg-gray-500/60 text-white cursor-pointer 
          transition-colors duration-0 ease-in-out 
          hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
          hover:duration-700
          "
    >
      {value}
    </div>
  );
}
