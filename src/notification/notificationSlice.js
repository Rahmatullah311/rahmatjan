import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  open: false,
  message: '',
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload
      state.open = true
    },
    hideNotification: (state) => {
      state.open = false
    }
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;