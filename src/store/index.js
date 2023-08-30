import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.slice";
import loginGoogleReducer from "./slices/loginGoogleSlice";
import userReducer from "./slices/user.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loginGoogle: loginGoogleReducer,
    user: userReducer,
  },
});

export default store;
