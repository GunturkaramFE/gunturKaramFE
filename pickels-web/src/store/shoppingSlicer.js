// src/features/shopping/shoppingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {
    id: null,
    userId: null,
    cart: [],
    wishlist: [],
  },
  reducers: {
    setShoppingData: (state, action) => {
      return { ...state, ...action.payload };
    },
    addToCart: (state, action) => {
      const { item } = action.payload;
      state.cart.push(item);
    },
    removeFromCart: (state, action) => {
      const { itemId } = action.payload;
      state.cart = state.cart.filter(item => item.id !== itemId);
    },
    addToWishlist: (state, action) => {
      const { item } = action.payload;
      state.wishlist.push(item);
    },
    removeFromWishlist: (state, action) => {
      const { itemId } = action.payload;
      state.wishlist = state.wishlist.filter(item => item.id !== itemId);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    clearShoppingData: (state) => {
      return {
        id: null,
        userId: null,
        cart: [],
        wishlist: [],
      };
    },
  },
});

export const {
  setShoppingData,
  addToCart,
  removeFromCart,
  addToWishlist,
  emptyCart,
  removeFromWishlist,
  clearShoppingData,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
