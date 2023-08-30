import React from "react";

export default function SearchBar() {
  return (
    <div className="relative lg:flex">
      <i className="
        fa-solid fa-magnifying-glass
        absolute top-3 left-4 text-gray-300 
        "
      >
      </i>
      <input
        className="search bg-[#f3f4f6] text-slate-800 h-[40px] w-[330px] pl-12 rounded-lg" 
        type="text" 
        placeholder="Search"
      />
    </div>
    // <div className="pb-4 px-14 flex mx-auto xl:container">
    //   <div className="bg-primary-v1 text-white p-2 ">
    //     <svg
    //       className=" fill-stroke  dark:text-white "
    //       width={20}
    //       height={20}
    //       viewBox="0 0 20 20"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
    //         stroke="currentColor"
    //         strokeWidth="1.25"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M19.0004 19.0004L14.6504 14.6504"
    //         stroke="currentColor"
    //         strokeWidth="1.25"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg>
    //   </div>
    //   <input
    //     type="text"
    //     placeholder="Search for products"
    //     className="
    //     focus:outline-none border-solid border-[1px] border-blue-500 px-4 w-full bg-transparent text-sm text-gray-600"
    //   />
    // </div>
  );
}
