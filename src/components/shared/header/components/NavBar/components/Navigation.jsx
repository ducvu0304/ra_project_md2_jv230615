import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="hidden md:block">
      <ul className="flex items-center space-x-6 mt-3">
        <li>
          <Link to="/news">
            <p className="dark:text-white dark:hover:text-gray-300 text-lg text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
              New Arrival
            </p>
          </Link>
        </li>
        <li>
          <Link to="/men">
            <p className="dark:text-white dark:hover:text-gray-300 text-xl text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
              Men
            </p>
          </Link>
        </li>
        <li>
          <Link to="/women">
            <p className="dark:text-white dark:hover:text-gray-300 text-lg text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
              Women
            </p>
          </Link>
        </li>
        <li>
          <Link>
            <p className="dark:text-white dark:hover:text-gray-300 text-lg text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
              Kids
            </p>
          </Link>
        </li>
        <li>
          <Link>
            <p className="dark:text-white dark:hover:text-gray-300 text-lg text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
              Magazine
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
