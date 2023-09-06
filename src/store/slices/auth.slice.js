import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { encodeValue } from "@Js";
import api from "@api";

const token = localStorage.getItem("token") || "";

// InitialState
const initialState = {
  users: [],
  isLoggedIn: `${token ? true : false}`,
  isCreated: false,
};

// Actions
const login = createAsyncThunk("users/login", async (userInfo) => {
  const response = await api.user.getUserByEmail(userInfo.email.toLowerCase());
  return response.data;
});

const register = createAsyncThunk("users/register", async (userInfo) => {
  const response = await api.user.createUser(userInfo);
  return response.data;
});

// Create Slice
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(state.users);
      state.isLoggedIn = true;
      const token = encodeValue(action.payload[0]);
      localStorage.setItem("token", token);
    });

    // Register
    builder.addCase(register.fulfilled, (state, action) => {
      state.isCreated = true;
      state.isLoggedIn = true;
      localStorage.setItem("token", encodeValue(action.payload));
    });
  },
});

// exports
export const authActions = { ...slice.actions, login, register };
export const authReducer = slice.reducer;
