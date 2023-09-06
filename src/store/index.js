import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.slice";
import loginGoogleReducer from "./slices/loginGoogleSlice";
import userReducer from "./slices/user.slice";
import cartReducer from "./slices/cart.slice";
import productReducer from "./slices/product.slice";
import filterReducer from "./slices/filter.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loginGoogle: loginGoogleReducer,
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    filter: filterReducer,
  },
});

export default store;
