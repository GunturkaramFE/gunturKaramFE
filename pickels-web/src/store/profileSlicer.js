// src/features/profile/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    id: null,
    email: '',
    password: '',
    type: '',
    name: '',
    mobile: '',
    isDeleted: false,
    modifyAt: null,
    lastLogin: null,
    isSignIn: false,
  },
  reducers: {
    setProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearProfile: (state) => {
      return {
        id: null,
        email: '',
        password: '',
        type: '',
        name: '',
        mobile: '',
        isDeleted: false,
        modifyAt: null,
        lastLogin: null,
        isSignIn: false,
      };
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
