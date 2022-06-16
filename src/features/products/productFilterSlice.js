import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
};

const productFilterSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    filterByStock: (state, action) => {
      state.byStock = !state.byStock;
    },
    filterByDeliveryTimeline: (state, action) => {
      state.byFastDelivery = !state.byFastDelivery;
    },
    sortByPrice: (state, action) => {
      state.sort = action.payload;
    },
    filterByRating: (state, action) => {
      state.byRating = action.payload;
    },
    filterBySearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearFilters: (state, action) => {
      return (state = {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      });
    },
  },
});

export const {
  filterByStock,
  filterByDeliveryTimeline,
  sortByPrice,
  filterByRating,
  filterBySearch,
  clearFilters,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;
