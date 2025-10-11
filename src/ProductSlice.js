import { createSlice } from "@reduxjs/toolkit";

const savedCartids = JSON.parse(localStorage.getItem("proDUCTid")) || [];

export const ProductSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
    cartItems: savedCartids,
  },
  reducers: {
    searchPro: (state, action) => {
      state.value = action.payload;
    },
    addTocart: (state, action) => {
      const existId = state.cartItems.find((item) => item == action.payload);
      if (existId) return;
      state.cartItems.push(action.payload);
      localStorage.setItem("proDUCTid", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item !== action.payload
      );
      localStorage.setItem("proDUCTid", JSON.stringify(state.cartItems));
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchPro, addTocart, removeFromCart } = ProductSlice.actions;

export default ProductSlice.reducer;
