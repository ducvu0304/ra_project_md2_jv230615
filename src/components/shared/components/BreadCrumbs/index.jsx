import React from "react";

export default function BreadCrumbs() {
  return (
    <nav
      className="
      relative flex w-full flex-wrap items-center justify-between 
      pt-3 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700
      dark:bg-neutral-600 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref=""
    >
      <div className="flex w-full flex-wrap items-center justify-between">
        <nav className="w-full rounded-md" aria-label="breadcrumb">
          <ol className="list-reset flex">
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-700 hover:underline dark:text-neutral-200"
              >
                Home
              </a>
            </li>
            <li>
              <span className="mx-2 text-neutral-500 dark:text-neutral-200">
                /
              </span>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-700 hover:underline dark:text-neutral-200"
              >
                Men
              </a>
            </li>
            <li>
              <span className="mx-2 text-neutral-500 dark:text-neutral-200">
                /
              </span>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-700 hover:underline dark:text-neutral-200"
              >
                Running
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  );
}
