import loginImg from "@images/login-img.jpg";
import SingUp from "./SignUp";
import { useState } from "react";

import SignIn from "./SignIn";

export default function LuxeForm() {
  const [isSignIn, setSignIn] = useState(true);

  return (
    <div className="flex justify-center mt-5">
      <div className="flex justify-center lg:w-[90%]">
        {/* Left-Pane */}
        <div className=" hidden lg:hidden xl:block">
          <img
            src={loginImg}
            alt="login-img"
            className="hidden w-full lg:block"
          />
        </div>
        {/* Right-Pane */}
        <div className=" x-10 md:w-[65%] xl:w-[36%]">
          <div className="flex justify-center h-8 text-white mt-6">
            <button
              onClick={() => setSignIn(!isSignIn)}
              className={`${
                isSignIn ? "bg-primary-v1" : "btn-disable"
              } w-full border-[1px] mr-1 rounded`}
            >
              Sign In
            </button>
            <button
              onClick={() => setSignIn(!isSignIn)}
              className={`${
                isSignIn ? "btn-disable" : "bg-primary-v1"
              } w-full border-[1px] rounded`}
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center">
            {isSignIn ? <SignIn /> : <SingUp />}
          </div>
        </div>
      </div>
    </div>
  );
}
