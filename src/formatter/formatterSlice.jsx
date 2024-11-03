import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isDark: true,
}

const formatterSlice = createSlice({
  name: 'formatter',
  initialState,
  reducers: {
    formatterThemeToggler(state) {
      state.isDark = !state.isDark
    }
  }
})

export const {formatterThemeToggler}  = formatterSlice.actions

export default formatterSlice.reducer