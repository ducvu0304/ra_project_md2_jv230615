import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  running: false,
  tennis: false,
  twoMillion: false,
  threeMillion: false,
  fourMillion: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    check(state, action) {
      switch (action.payload) {
        case "running":
          state.running = !state.running;
          break;
        case "tennis":
          state.tennis = !state.tennis;
          break;
        case "twoMillion":
          state.twoMillion = !state.twoMillion;
          state.threeMillion = false;
          state.fourMillion = false;
          break;
        case "threeMillion":
          state.threeMillion = !state.threeMillion;
          state.twoMillion = false;
          state.fourMillion = false;
          break;
        case "fourMillion":
          state.fourMillion = !state.fourMillion;
          state.twoMillion = false;
          state.threeMillion = false;
          break;
        default:
          state;
          break;
      }
    },
  },
});

export const { check } = filterSlice.actions;
export default filterSlice.reducer;
