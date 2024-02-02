// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    email: '',
    type: '',
    name: '',
    mobile: null,
    isdeleted: false,
    modifyAt: null,
    lastLogin: null,
    isSignIn: false,
  },
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUserData: (state) => {
      return {
        id: null,
        email: '',
        type: '',
        name: '',
        mobile: null,
        isdeleted: false,
        modifyAt: null,
        lastLogin: null,
        isSignIn: false,
      };
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
