import React from "react";

export default function Sidebar() {
  return (
    <div className="mt-4 mx-4">
      <ul className="flex flex-col space-y-4">
        <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
          <a
            href="javascript:void(0)"
            className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
          >
            {" "}
            New{" "}
          </a>
          <button
            aria-label="Add"
            className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              className="fill-stroke"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.3335V12.6668"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33203 8H12.6654"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
        <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
          <a
            href="javascript:void(0)"
            className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
          >
            {" "}
            Men{" "}
          </a>
          <button
            aria-label="Add"
            className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              className="fill-stroke"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.3335V12.6668"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33203 8H12.6654"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
        <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
          <a
            href="javascript:void(0)"
            className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
          >
            {" "}
            Women{" "}
          </a>
          <button
            aria-label="Add"
            className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              className="fill-stroke"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.3335V12.6668"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33203 8H12.6654"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
        <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
          <a
            href="javascript:void(0)"
            className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
          >
            {" "}
            Kids{" "}
          </a>
          <button
            aria-label="Add"
            className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              className="fill-stroke"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.3335V12.6668"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33203 8H12.6654"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
        <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
          <a
            href="javascript:void(0)"
            className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
          >
            {" "}
            Magazine{" "}
          </a>
          <button
            aria-label="Add"
            className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              className="fill-stroke"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.3335V12.6668"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33203 8H12.6654"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
