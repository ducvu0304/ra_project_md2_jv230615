import loginImg from "@images/login-img.jpg";
import SingUp from "./SignUp";
import { useState } from "react";

import SignIn from "./SignIn";

export default function LuxeForm() {
  const [isSignIn, setSignIn] = useState(true);

  return (
    <div className="flex justify-center">
      <div>
        <img
          src={loginImg}
          alt="login-img"
          className="hidden lg:block lg:w-full "
        />
      </div>
      <div className="mx-10">
        <div className="flex justify-center h-8 text-white mt-6">
          <button
            onClick={() => setSignIn(!isSignIn)}
            className={`${
              isSignIn ? "bg-primary-v1" : "btn-disable"
            } w-full border-[1px]  rounded`}
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
        {isSignIn ? <SignIn /> : <SingUp />}
      </div>
    </div>
  );
}
