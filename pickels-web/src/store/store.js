// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer, { clearProfile, setProfile } from '../store/profileSlicer';
import api from '../api';
import shoppingReducer, { clearShoppingData, setShoppingData } from '../store/shoppingSlicer'; // Import the shopping slicer

const store = configureStore({
  reducer: {
    profile: profileReducer,
    shopping:shoppingReducer
  },
});
const fetchShoppingDataOnPageRefresh = async () => {
  try {
    const response = await api.get('/shopping-data');
    store.dispatch(setShoppingData(response.data));
  } catch (error) {
    console.error('Error fetching shopping data:', error);
    store.dispatch(clearShoppingData());
  }
};

 fetchShoppingDataOnPageRefresh().then(()=>console.log('data-fetched'));


export default store;
