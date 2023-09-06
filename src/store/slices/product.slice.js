/* eslint-disable no-unused-vars */
import api from "@api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const search = createAsyncThunk("product/findAllProduct", async (keyword) => {
  const response = await api.product.findAllProduct();

  if (response.status === 200) {
    return {
      keyword: keyword,
      data: response.data,
    };
  }
});

const view = createAsyncThunk("product/findProductById", async (id) => {
  const response = await api.product.findProductById(id);

  if (response.status === 200) {
    return response.data[0];
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    item: {},
    isSearchValue: false,
    searchData: [],
  },
  reducers: {
    setIsSearchValue(state) {
      state.isSearchValue = false;
    },
  },
  extraReducers: (builder) => {
    // Search
    builder.addCase(search.fulfilled, (state, action) => {
      const keyword = action.payload.keyword;
      const pages = ["men", "women", "new", "kid"];
      const isExistProductByName = action.payload.data.find(
        (item) => item.name === keyword.toUpperCase(),
      );

      if (pages.indexOf(keyword) !== -1) {
        window.location.href = `${keyword}`;
      }

      if (isExistProductByName) {
        state.item = { ...isExistProductByName };
        state.isSearchValue = true;
      }
    });
    // View
    builder.addCase(view.fulfilled, (state, action) => {
      state.item = { ...action.payload };
    });
  },
});

export const productActions = { ...productSlice.actions, search, view };
export default productSlice.reducer;
