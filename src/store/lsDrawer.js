// drawerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    draweropen: (state) => {
      state.isOpen = true;
    },
    drawerClose: (state) => {
      state.isOpen = false;
    },
    drawerToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { drawerClose,draweropen,drawerToggle} = drawerSlice.actions;
export default drawerSlice.reducer;
