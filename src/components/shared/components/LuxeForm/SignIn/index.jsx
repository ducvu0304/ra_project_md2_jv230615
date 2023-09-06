import React, { useEffect } from "react";
import api from "@api";

import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import LoginGoogleButton from "../../LoginGoogle";

import { authActions } from "@store/auth.slice";
import { useState } from "react";
import { decodeValue } from "@Js";
import { Navigate } from "react-router-dom";

export default function SignIn() {
  const [isNavigate, setIsNavigate] = useState(false);
  const [users, setUsers] = useState([]);
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();

  const signUpFormValid = async (values) => {
    const errors = {};
    const existsByEmail = users.some(
      (item) => values.email.toLowerCase() === item.email,
    );
    const user = users.find(
      (item) => values.email.toLowerCase() === item.email,
    );

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    } else {
      if (!existsByEmail) {
        errors.email = "Email is not registered";
      }
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (existsByEmail) {
      if (values.password !== decodeValue(user.password)) {
        errors.password = "The password is incorrect";
      }
    }

    return errors;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.user.findAllUser();

      if (response.request.status == 200) {
        setUsers(response.data);
      } else {
        throw new Error("Failed to fetch users");
      }
    };
    fetchData();
  }, []);

  const handleSignIn = (userInfo) => {
    dispatch(authActions.login(userInfo));
    setIsNavigate(!isNavigate);
  };

  return (
    <div className="w-[320px] md:w-[700px]">
      <div className="flex justify-center items-center h-full ">
        <div className="container mb-12 lg:w-full ">
          <p className="text-2xl text-center my-4">Sign into Your account</p>
          <div className="grid grid-cols-1 w-full gap-5 md:grid-cols-2">
            {/* <div>
              <LoginGoogleButton />
            </div> */}
            {/* <div className="text-center">
              <button>Facebook</button>
            </div> */}
          </div>
          <div className="flex items-center justify-center my-4">
            <div className="border-b border-gray-700 w-1/2"></div>
            <p className="text-xs sm:text-sm md:text-base font-medium leading-none text-gray-700 px-2.5">
              OR
            </p>
            <div className="border-b border-gray-700 w-1/2"></div>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              checkRemember: true,
            }}
            validate={signUpFormValid}
            onSubmit={(values, { resetForm }) => {
              handleSignIn(values);
              resetForm();
            }}
          >
            {({ handleChange }) => (
              <Form>
                <div className="mb-5">
                  <Field
                    onChange={handleChange}
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
                      onChange={handleChange}
                      name="password"
                      className="inpt w-full"
                      type={hidePassword ? "password" : "text"}
                      placeholder="Password"
                    />
                    <div
                      onClick={() => setHidePassword(!hidePassword)}
                      className="absolute right-5 top-2 cursor-pointer"
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
                <div className="grid mb-5 text-blue-700 grid-cols-2">
                  <div>
                    <Field
                      name="checkRemember"
                      className="cursor-pointer"
                      type="checkbox"
                    />
                    <label className="ml-2">Remember</label>
                  </div>
                  <p className="text-right cursor-pointer hover:underline hover:text-blue-900">
                    Forgot password
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-v1 h-10 rounded-2xl text-sm hover:text-base"
                >
                  SIGN IN
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
