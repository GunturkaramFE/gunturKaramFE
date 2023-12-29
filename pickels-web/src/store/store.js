// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../store/profileSlicer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
