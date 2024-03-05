// src/features/profile/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    email: '',
    type: '',
    name: '',
    mobile: '', 
  },
  reducers: {
    setProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearProfile: (state) => {
      return {
        email: '',   
        type: '',
        name: '',
        mobile: '',
      };
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
