import {createSlice} from "@reduxjs/toolkit";

const cartStatusSlice = createSlice({
  name: 'cartStatus',
  initialState: {
    isOpen: false
  },
  reducers: {
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    },
  },
});

export const {
  openCart,
  closeCart
} = cartStatusSlice.actions

export default cartStatusSlice.reducer
