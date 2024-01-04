// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer, { clearProfile, setProfile } from '../store/profileSlicer';
import api from '../api';
import shoppingReducer, { clearShoppingData, setShoppingData } from '../store/shoppingSlicer';
import trendingProductsReducer, { setAllProducts, clearAllProducts } from '../store/trendingProductsSlicer'
import allProductsReducer, { setAllProducts as setAllProductsAll, clearAllProducts as clearAllProductsAll } from '../store/allProductsSlicer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    shopping: shoppingReducer,
    trendingProducts: trendingProductsReducer,
    allProducts: allProductsReducer,
  },
});

const fetchShoppingDataOnPageRefresh = async () => {
  try {
    const response = await api.get('/user/getShoppingData');
    store.dispatch(setShoppingData(response.data));
  } catch (error) {
    console.error('Error fetching shopping data:', error);
    store.dispatch(clearShoppingData());
  }
};

fetchShoppingDataOnPageRefresh().then(() => console.log('Shopping data fetched.'));

// Export the store
export default store;
