// src/features/trendingProducts/trendingProductsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState: [], 
  reducers: {
    setAllProducts: (state, action) => {
      return action.payload;
    },
    clearAllProducts: () => {
      return []; 
    },
  },
});

export const { setAllProducts, clearAllProducts } = allProductsSlice.actions;
export default allProductsSlice.reducer;
