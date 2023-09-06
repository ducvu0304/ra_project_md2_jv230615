/* eslint-disable react/prop-types */
import { useState } from "react";
import "../filter.css";
import { useDispatch, useSelector } from "react-redux";
import { check } from "@store/filter.slice";

export default function MobileFilter() {
  const [showFilter, setShowFilter] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const dispatch = useDispatch();
  const filter = useSelector((store) => store.filter);
  const { running, tennis, twoMillion, threeMillion, fourMillion } = filter;

  return (
    <div className="relative">
      <div className="flex justify-end">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="
            w-[170px] 
            flex justify-center items-center bg-gray-800 text-white text-base font-normal cursor-pointer py-1 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 
            md:w-[200px] md:py-2
            "
        >
          {/* Filter icon */}
          <svg
            className=" mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 4V8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12V20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4V14"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18V20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 4V5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 9V20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-3">Filter</span>
        </button>
      </div>
      {/* Block-Filter */}
      <div
        className={`${
          showFilter ? "block" : "hidden"
        } absolute z-10 px-1 bg-slate-200 w-full border-slate-300 border-[1px] md:px-4`}
      >
        {/* Category Section */}
        <div className="py-3 border-b-slate-300 border-[1px]">
          <div
            onClick={() => setShowCategory(!showCategory)}
            className="flex justify-between items-center space-x-2 cursor-pointer "
          >
            {/* Category icon */}
            <div className=" flex items-center space-x-2 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 7H20"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 4V10"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <p className="lg:text-xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                CATEGORY
              </p>
            </div>
            <div className="text-gray-800 cursor-pointer">
              {showCategory ? (
                <i className="fa-solid fa-minus"></i>
              ) : (
                <i className="fa-solid fa-plus"></i>
              )}
            </div>
          </div>
          {/* Category - Values */}
          {showCategory ? (
            <div className="filter-values relative top-0 transition-all duration-300 ease-in-out mt-4 ml-1">
              <div className="">
                <input
                  className="w-4 h-4 mr-2 cursor-pointer"
                  type="checkbox"
                  id="tennis"
                  name="tennis"
                  value="Tennis"
                  checked={tennis}
                  onChange={() => dispatch(check("tennis"))}
                />
                <label
                  className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer lg:text-lg "
                  htmlFor="tennis"
                >
                  Tennis
                </label>
              </div>

              <div className=" flex items-center">
                <input
                  className="w-4 h-4 mr-2 cursor-pointer"
                  type="checkbox"
                  id="running"
                  name="running"
                  checked={running}
                  onChange={() => dispatch(check("running"))}
                  value="LxL"
                />
                <label
                  className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer lg:text-lg"
                  htmlFor="running"
                >
                  Running
                </label>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Price Section */}
        <div className="py-2 border-b-blue-300 border-[1px]">
          <div
            onClick={() => setShowPrice(!showPrice)}
            className="flex justify-between items-center space-x-2 cursor-pointer"
          >
            {/* Price icon */}
            <div className=" flex items-center space-x-2 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 7H20"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 4V10"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <p className=" lg:text-xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                PRICE
              </p>
            </div>
            <div className="text-gray-800 cursor-pointer">
              {showPrice ? (
                <i className="fa-solid fa-minus"></i>
              ) : (
                <i className="fa-solid fa-plus"></i>
              )}
            </div>
          </div>
          {/* Values */}
          {showPrice ? (
            <div className="mt-4 ml-1">
              <div className=" ">
                <input
                  className="w-4 h-4 mr-2 cursor-pointer"
                  type="checkbox"
                  id="twoMillion"
                  name="twoMillion"
                  checked={twoMillion}
                  onChange={() => dispatch(check("twoMillion"))}
                />
                <label
                  className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer lg:text-lg"
                  htmlFor="twoMillion "
                >
                  <i className="fa-solid fa-arrow-down mr-2 text-base"></i>
                  <span>2 millions</span>
                </label>
              </div>

              <div className=" flex items-center ">
                <input
                  className="w-4 h-4 mr-2 cursor-pointer"
                  type="checkbox"
                  id="threeMillion"
                  name="threeMillion"
                  checked={threeMillion}
                  onChange={() => dispatch(check("threeMillion"))}
                />
                <label
                  className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer lg:text-lg"
                  htmlFor="threeMillion"
                >
                  <i className="fa-solid fa-arrow-down mr-2 text-base"></i>
                  <span>3 millions</span>
                </label>
              </div>

              <div className=" flex items-center ">
                <input
                  className="w-4 h-4 mr-2 cursor-pointer"
                  type="checkbox"
                  id="fourMillion"
                  name="fourMillion"
                  checked={fourMillion}
                  onChange={() => dispatch(check("fourMillion"))}
                />
                <label
                  className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer lg:text-lg"
                  htmlFor="fourMillion"
                >
                  <i className="fa-solid fa-arrow-down mr-2 text-base"></i>
                  <span>4 millions</span>
                </label>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
