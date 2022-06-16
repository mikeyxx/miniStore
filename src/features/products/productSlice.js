import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";
import { currency } from "../../data";

const initialState = {
  products: products,
  currency: currency,
  currencySymbol: "",
  pdp: [],
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItemToPdp: (state, action) => {
      state.pdp.push(action.payload);
    },
    removeItemFromPdp: (state, action) => {
      state.pdp = state.pdp.filter((p) => p.id !== action.payload.id);
    },
    addItemToCart: (state, action) => {
      state.cart.push({ ...action.payload, qty: 1 });
    },
    incrementCartItemQty: (state, action) => {
      state.cart.map((p) =>
        p.id === action.payload.id ? (p.qty += 1) : p.qty
      );
    },
    decrementCartItemQty: (state, action) => {
      state.cart.map((p) =>
        p.id === action.payload.id ? (p.qty -= 1) : p.qty
      );
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload.id);
    },

    chooseCurrency: (state, action) => {
      state.currencySymbol = action.payload;
    },
  },
});

export const {
  addItemToPdp,
  removeItemFromPdp,
  addItemToCart,
  removeItemFromCart,
  chooseCurrency,
  incrementCartItemQty,
  decrementCartItemQty,
} = productSlice.actions;

export default productSlice.reducer;
