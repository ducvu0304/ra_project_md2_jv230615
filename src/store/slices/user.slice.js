import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@api";
import { encodeValue } from "@Js";

const initialState = {
  users: [],
  isCreated: false,
  isLoggedIn: false,
};

const register = createAsyncThunk("user/register", async (userInfo) => {
  const response = await api.user.createUser(userInfo);

  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isCreated = true;
      state.isLoggedIn = true;
      localStorage.setItem("token", encodeValue(action.payload));
    });
  },
});

export const userActions = { ...userSlice.actions, register };
export default userSlice.reducer;
