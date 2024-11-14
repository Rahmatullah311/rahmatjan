import { createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from "../settings";

const initialState = {
  isDark: DefaultTheme == 'light'?false:true,
}

const formatterSlice = createSlice({
  name: 'formatter',
  initialState,
  reducers: {
    formatterThemeToggler(state, action) {
      state.isDark = !state.isDark
    }
  }
})

export const {formatterThemeToggler}  = formatterSlice.actions

export default formatterSlice.reducer