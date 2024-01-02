// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer, { clearProfile, setProfile } from '../store/profileSlicer';
import api from '../api';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});
const fetchUserProfileOnPageRefresh = async () => {
  try {
    const token = localStorage.getItem('Auth');
    if (token) {
      // Make an API request to get user data
      const response = await api.get('/user-profile');
      
  
      store.dispatch(setProfile());
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    // If an error occurs, you might want to dispatch clearProfile or handle it accordingly
    store.dispatch(clearProfile());
  }
};

// Call the function on page refresh
fetchUserProfileOnPageRefresh();
export default store;
