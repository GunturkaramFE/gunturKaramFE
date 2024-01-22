import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: null, // You can store a single address object here
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
   
  },
});

export const { setAddress, clearAddress } = addressSlice.actions;

export default addressSlice.reducer;
