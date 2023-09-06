/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, Navigate } from "react-router-dom";
import MyAccount from "../myaccount/MyAccount";

export default function SideBar({ showMenu, setShowMenu }) {
  const handleRedirect = (pageName) => {
    setShowMenu(!showMenu), (<Navigate to={`/${pageName}`} />);
  };

  return (
    <div className="transition width duration-300 ease-in-out delay-200 bg-white border-2 ">
      <ul className="flex flex-col select-none">
        <Link to="/men">
          <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 py-3 px-6 hover:bg-slate-100 ">
            <p className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:text-blue-900 hover:underline">
              Men
            </p>
          </li>
        </Link>
        <Link to="/women">
          <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 py-3 px-6 hover:bg-slate-100 ">
            <p className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:text-blue-900 hover:underline">
              Women
            </p>
          </li>
        </Link>
        <Link to="/*">
          <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 py-3 px-6 hover:bg-slate-100 ">
            <p className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:text-blue-900 hover:underline">
              Kids
            </p>
          </li>
        </Link>
        <Link to="/*">
          <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 py-3 px-6 hover:bg-slate-100">
            <p className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:text-blue-900 hover:underline">
              Magazine
            </p>
          </li>
        </Link>
      </ul>

      <div>
        <MyAccount />
      </div>
    </div>
  );
}
