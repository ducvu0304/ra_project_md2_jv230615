/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "../checkout.css";

export default function ContactForm({ handleShipping, contactInfo , setContactInfo}) {
  const [errors, setErrors] = useState({
    email: '',
    address: '', 
    phoneNumber: ''
  })
 
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
      handleShipping(name);
    } else {
      setChecked({
        standard: false,
        express: true,
      });
      handleShipping(name);
    }
  };

  const handleContactInfo = (e) => {
    if(!e.target.value) {
      setErrors({
        ...errors,
        [e.target.name] : 'Require !'
      })
    }else if(e.target.name === "email") {
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
        setErrors({
          ...errors,
          [e.target.name] : "Invalid email !"
        })
      }else {
        setErrors({
          ...errors,
          [e.target.name] : ""
        })
      }
    }else {
        setErrors({
          ...errors,
          [e.target.name] : ""
        })
    }

    setContactInfo({
      ...contactInfo,
      [e.target.name] : e.target.value
    })
  }


  return (
    <div>
      <div className="px-10 my-10">
        {/* Contact information */}
        <div className=" border-b-[1px] border-b-neutral-300 pb-6">
          <p className="text-3xl font-istok_web text-primary-v1">
            Contact information
          </p>
              <form>
                <div className="mt-3">
                  <label className="text-lg font-istok_web " htmlFor="">
                    Email address
                  </label>
                  <br />
                  <input
                    className="border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700"
                    type="text"
                    name='email'
                    value={contactInfo.email}
                    onChange={(e => handleContactInfo(e))}
                  />
                  <p className="text-red-500 mt-[1px]">{errors.email ? errors.email : ''}</p> 
                </div>
                <div className="mt-3">
                  <label className="text-lg font-istok_web" htmlFor="">
                    Address
                  </label>
                  <br />
                  <input
                    className="border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700"
                    autoComplete="off"
                    type="text"
                    name="address"
                    value={contactInfo.address}
                    onChange={(e => handleContactInfo(e))}
                  />
                  <p className="text-red-500 mt-[1px]">{errors.address ? errors.address : ''}</p> 
                </div>
                <div className="mt-3">
                  <label className="text-lg font-istok_web" htmlFor="">
                    Phone number
                  </label>
                  <br />
                  <input
                    className="border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700"
                    type="tel"
                    autoComplete="off"
                    placeholder="090-8888-8888"
                    name="phoneNumber"
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}"
                    value={contactInfo.phoneNumber}
                    onChange={(e => handleContactInfo(e))}
                  />
                  <p className="text-red-500 mt-[1px]">{errors.phoneNumber ? errors.phoneNumber : ''}</p> 
                </div>
              </form>
        </div>

        {/* Delivery method */}
        <div className="py-10">
          <p className="text-3xl font-istok_web mb-5 text-primary-v1">
            Delivery method
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Standard */}
            <div
              onClick={() => changeHandler("standard")}
              className={`${
                standard ? "checked" : ""
              }  border-2 border-blue-400 rounded-lg p-4 cursor-pointer `}
            >
              <div className="flex justify-between w-full ">
                <p className="text-lg mb-1">Standard</p>
                <label className="ratioInput">
                  <input type="checkbox" name="standard" checked={standard} />
                  <span className="checkmark"></span>
                </label>
              </div>
              <p className="mb-6 text-slate-500">4-10 business days</p>
              <p>Free ship</p>
            </div>
            {/* Express */}
            <div
              onClick={() => changeHandler("express")}
              className={`${
                express ? "checked" : ""
              } border-2 border-blue-700 rounded-lg p-4 cursor-pointer`}
            >
              <div className="flex justify-between w-full ">
                <p className="text-lg mb-1">Express</p>
                <label className="ratioInput">
                  <input
                    type="checkbox"
                    name="express"
                    checked={express}
                    onChange={(e) => changeHandler(e)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <p className="mb-6 text-slate-500">2-4 business days</p>
              <p>50,000 đ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
