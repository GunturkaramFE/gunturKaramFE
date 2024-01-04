// src/features/trendingProducts/trendingProductsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const trendingProductsSlice = createSlice({
  name: 'trendingProducts',
  initialState: [], 
  reducers: {
    addProduct: (state, action) => {
     return action.payload
    },
    removeProduct: (state, action) => {
      const productIdToRemove = action.payload;
      return state.filter(product => product.id !== productIdToRemove);
    },
    clearTrendingProducts: () => {
      return []; 
    },
  },
});

export const { addProduct, removeProduct, clearTrendingProducts } = trendingProductsSlice.actions;
export default trendingProductsSlice.reducer;
