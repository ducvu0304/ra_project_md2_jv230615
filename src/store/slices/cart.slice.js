import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@api";
import { setCookie, getCookie } from "@Js";

const cartProducts = getCookie("carts") || [];

const initialState = {
  products: cartProducts,
};

const addToCart = createAsyncThunk("products/findProductById", async (id) => {
  const response = await api.product.findProductById(id);
  return response.data[0];
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeProduct(state, action) {
      console.log(action.payload);
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload) {
          state.products.splice(i, 1);
        }
      }
      setCookie("carts", state.products, 3);
    },
    increaseQuantity(state, action) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload) {
          state.products[i].quantity += 1;
        }
      }
      setCookie("carts", state.products, 3);
    },
    decreaseQuantity(state, action) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === action.payload) {
          state.products[i].quantity -= 1;
        }
      }
      setCookie("carts", state.products, 3);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const existsProductById = state.products.find(
        (item) => item.id === action.payload.id,
      );

      if (state.products.length > 0) {
        // Exists
        for (let i = 0; i < state.products.length; i++) {
          if (state.products[i].id === action.payload.id) {
            state.products[i].quantity += 1;
          }
        }

        if (!existsProductById) {
          action.payload.quantity = 1;
          state.products.push(action.payload);
        }
      } else {
        action.payload.quantity = 1;
        state.products.push(action.payload);
      }

      setCookie("carts", state.products, 3);
    });
  },
});

export const cartActions = { ...cartSlice.actions, addToCart };
export default cartSlice.reducer;
