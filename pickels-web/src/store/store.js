// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer, { setUserData, clearUserData } from '../store/userSlicer'; // Import user reducer and actions
import profileReducer, { clearProfile, setProfile } from '../store/profileSlicer';
import api from '../api';
import shoppingReducer, { clearShoppingData, setShoppingData } from '../store/shoppingSlicer';
import trendingProductsReducer, { setAllProducts, clearAllProducts } from '../store/trendingProductsSlicer'
import allProductsReducer, { setAllProducts as setAllProductsAll, clearAllProducts as clearAllProductsAll } from '../store/allProductsSlicer';
import addressReducer from '../store/shippingAddressSlicer'
import orderReducer from './orderDetailsSlicer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    shopping: shoppingReducer,
    trendingProducts: trendingProductsReducer,
    allProducts: allProductsReducer,
    shippingAddress: addressReducer,
    order: orderReducer
  },
});

export const fetchShoppingDataOnPageRefresh = async () => {
  try {
    const [userDataResponse, shoppingDataResponse] = await Promise.all([
      api.get('/user/getUser'),
      api.get('/user/getShoppingData')
    ]);

    const user = userDataResponse?.user;
    const shoppingData = shoppingDataResponse.data;

    if (user) {
      store.dispatch(setUserData(user));
    } else {
      store.dispatch(clearUserData());
    }

    if (shoppingDataResponse.success) {
      store.dispatch(setShoppingData({ ...shoppingData, isuser: true }));
    } else if (!shoppingDataResponse.status && shoppingDataResponse?.error === 'Token not provided') {
      store.dispatch(setShoppingData({ id: null, userId: null, cart: [], wishlist: [], name: '', isuser: false }));
    }

  } catch (error) {
    console.error('Error fetching shopping data:', error);
    store.dispatch(clearShoppingData());
  }
};


fetchShoppingDataOnPageRefresh().then(() => console.log('Shopping data fetched.'));

// Export the store
export default store;
