import "../style.css";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import LoginGoogleButton from "../../LoginGoogle";
import { signUpFormValid, initialValues } from "./signUp";

import { authActions } from "@store/auth.slice";
import { encodeValue, UUID } from "@Js";
import { useState } from "react";

export default function SingUp() {
  const [isNavigate, setIsNavigate] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfPassword, setHideConfPassword] = useState(true);
  const dispatch = useDispatch();

  const handleSignUp = (userInfo) => {
    const newUser = {
      id: UUID(),
      firstName: userInfo.firstName.trim(),
      lastName: userInfo.lastName.trim(),
      email: userInfo.email.trim().toLowerCase(),
      password: encodeValue(userInfo.password),
      role: "user",
      avatar: "",
    };

    dispatch(authActions.register(newUser));
    setIsNavigate(!isNavigate);
  };

  return (
    <div className="w-[320px] md:w-[700px] lg:w-full">
      <div className="flex justify-center items-center h-full ">
        <div className="container mb-12 lg:w-full ">
          <p className="text-2xl text-center my-4">REGISTER</p>
          <div className="grid grid-cols-1 w-full gap-5 md:grid-cols-2">
            <div>
              <LoginGoogleButton />
            </div>
            <div className="text-center">
              <button>Facebook</button>
            </div>
          </div>
          <div className="flex items-center justify-center my-4">
            <div className="border-b border-gray-700 w-1/2"></div>
            <p className="text-xs sm:text-sm md:text-base font-medium leading-none text-gray-700 px-2.5">
              OR
            </p>
            <div className="border-b border-gray-700 w-1/2"></div>
          </div>
          <Formik
            initialValues={initialValues}
            validate={signUpFormValid}
            onSubmit={(values, { resetForm }) => {
              handleSignUp(values), resetForm();
            }}
          >
            {({ handleChange }) => (
              <Form>
                <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                  <div className="mb-5">
                    <Field
                      onChange={handleChange}
                      name="firstName"
                      className="inpt w-full "
                      type="text"
                      placeholder="First Name"
                    />
                    <ErrorMessage name="firstName">
                      {(message) => (
                        <div className="text-red-500 ml-2">{message}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="mb-5">
                    <Field
                      name="lastName"
                      className="inpt w-full"
                      type="text"
                      placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName">
                      {(message) => (
                        <div className="text-red-500 ml-2">{message}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="mb-5">
                  <Field
                    name="email"
                    className="inpt w-full"
                    type="text"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email">
                    {(message) => (
                      <div className="text-red-500 ml-2">{message}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="mb-5">
                  <div className="relative">
                    <Field
                      name="password"
                      className="inpt w-full"
                      type={hidePassword ? "password" : "text"}
                      placeholder="Password"
                    />
                    <div
                      onClick={() => setHidePassword(!hidePassword)}
                      className="absolute right-4 top-2 cursor-pointer"
                    >
                      {hidePassword ? (
                        <i className="fa-solid fa-eye-slash"></i>
                      ) : (
                        <i className="fa-solid fa-eye"></i>
                      )}
                    </div>
                  </div>
                  <ErrorMessage name="password">
                    {(message) => (
                      <div className="text-red-500 ml-2">{message}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="mb-5">
                  <div className="relative">
                    <Field
                      name="confirmPassword"
                      className="inpt w-full"
                      type={hideConfPassword ? "password" : "text"}
                      placeholder="Confirm Password"
                    />
                    <div
                      onClick={() => setHideConfPassword(!hideConfPassword)}
                      className="absolute right-4 top-2 cursor-pointer"
                    >
                      {hideConfPassword ? (
                        <i className="fa-solid fa-eye-slash"></i>
                      ) : (
                        <i className="fa-solid fa-eye"></i>
                      )}
                    </div>
                  </div>

                  <ErrorMessage name="confirmPassword">
                    {(message) => (
                      <div className="text-red-500 ml-2">{message}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="mb-5">
                  <Field
                    name="checkPolicy"
                    className="cursor-pointer ml-3"
                    type="checkbox"
                  />
                  <label className="">
                    <span className="ml-3">I accept the </span>
                    <span className="underline">Terms of Use</span>
                    <span> & </span>
                    <span className="underline">Privacy Policy</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-v1 h-10 rounded-2xl text-sm hover:text-base"
                >
                  REGISTER NOW
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {isNavigate ? <Navigate to="/" replace={true} /> : ""}
    </div>
  );
}
