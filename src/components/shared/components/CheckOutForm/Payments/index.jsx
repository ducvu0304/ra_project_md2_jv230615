import React, { useState } from "react";
import "../checkout.css";
import Button from "@elements/button";

export default function Payments() {
  const [choices, setChoices] = useState({
    visa: false,
    master: false,
  });

  const { visa, master } = choices;

  const [checked, setChecked] = useState({
    standard: true,
    express: false,
  });

  const { standard, express } = checked;

  const changeHandler = (name) => {
    if (name === "standard") {
      setChecked({
        standard: true,
        express: false,
      });
    } else {
      setChecked({
        standard: false,
        express: true,
      });
    }

    if (name === "visa") {
      setChoices({
        visa: true,
        master: false,
      });
    } else {
      setChoices({
        visa: false,
        master: true,
      });
    }
  };
  return (
    <div>
      <div className="px-10 my-10">
        {/* Contact information */}
        <div className=" border-b-[1px] border-b-neutral-300 pb-6">
          <p className="text-3xl font-istok_web text-primary-v1">Payment</p>
          <div className="flex justify-center items-center gap-8 my-8">
            <div
              onClick={() => changeHandler("visa")}
              className="cursor-pointer"
            >
              <img
                className={`w-[530px] ${visa ? "checked" : ""}`}
                src="https://th.bing.com/th/id/OIP.5cvB_KzMHESmJhw_NXDKVgAAAA?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div
              onClick={() => changeHandler("master")}
              className="w-[500px] cursor-pointer"
            >
              <img
                className={`${master ? "checked" : ""}`}
                src="https://www.cloudhostnews.com/wp-content/uploads/2021/02/Mastercard-To-Allow-Merchants-Accept-Payments-in-Crypto.jpg"
                alt=""
              />
            </div>
          </div>
          <form action="">
            {/* Card number */}
            <div className="mt-3">
              <label className="text-lg font-istok_web " htmlFor="">
                Name on card
              </label>
              <br />
              <input
                className="border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700"
                type="text"
              />
            </div>
            {/* Card number */}
            <div className="mt-3">
              <label className="text-lg font-istok_web " htmlFor="">
                Card number
              </label>
              <br />
              <div className="flex items-center border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700">
                <input
                  className="w-10 focus:outline-none mr-2"
                  type="text"
                  name="month"
                  // value="1234"
                  maxLength={4}
                  placeholder="_ _ _ _"
                />
                <input
                  className="w-10 focus:outline-none mr-2"
                  type="text"
                  name="year"
                  // value="1234"
                  maxLength={4}
                  placeholder="_ _ _ _"
                />
                <input
                  className="w-10 focus:outline-none mr-2"
                  type="text"
                  name="year"
                  // value="1234"
                  maxLength={4}
                  placeholder="_ _ _ _"
                />
                <input
                  className="w-10 focus:outline-none "
                  type="text"
                  name="year"
                  // value="1234"
                  maxLength={4}
                  placeholder="_ _ _ _"
                />
              </div>
            </div>
            {/* Expiration date (MM/YY) */}
            <div className="mt-4 flex justify-between gap-5 w-[300px]">
              <div className="">
                <label className="text-lg font-istok_web" htmlFor="">
                  Expiration date (MM/YY)
                </label>
                <div className="flex items-center border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700">
                  <input
                    className="text-right w-20 focus:outline-none mr-2"
                    type="text"
                    name="month"
                    // value="12"
                    maxLength={2}
                    placeholder="MM"
                  />
                  {"//"}
                  <input
                    className="w-20 focus:outline-none ml-2"
                    type="text"
                    name="year"
                    // value="27"
                    maxLength={2}
                    placeholder="YY"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="text-lg font-istok_web" htmlFor="">
                  CVC
                </label>
                <input
                  className="border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700"
                  type="text"
                  maxLength={3}
                />
              </div>
            </div>
            <div className="text-xl border-t-[1px] pt-4">
              <Button value={"Payment"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
