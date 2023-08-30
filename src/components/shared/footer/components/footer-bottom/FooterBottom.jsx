import React from "react";

export default function FooterBottom() {
  return (
    <div className="text-center text-white bg-[#0a4275]">
      <div className="container pt-3">
        <div className="">
          <p className="flex items-center justify-center">
            <span className="mr-4">Register for free</span>
            <button
              type="button"
              className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal  focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 hover:bg-white hover:text-primary-v1"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              Sign up!
            </button>
          </p>
        </div>
      </div>
      {/*Copyright section*/}
      <div
        className="p-2 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://tailwind-elements.com/">
          Torus VietNam LLC, All Rights Reserved
        </a>
      </div>
    </div>
  );
}
