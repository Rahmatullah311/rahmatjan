import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../api";
import { showNotification } from "../notification/notificationSlice";

export const login = createAsyncThunk(
  "authentication/login",
  async (userData, { dispatch }) => {
    try {
      const response = await apiCall("/dj_rest_auth/login/", "POST", userData);
      if (response.status !== 200) {
        const errorMessage =
          response.status !== 400 ? "unexpected error" : "invalid credentails";
        dispatch(showNotification(errorMessage));
        throw new Error(errorMessage);
      } else {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const register = createAsyncThunk(
  "authentication/register",
  async (userData, { dispatch }) => {
    try {
      const response = await apiCall(
        "/dj_rest_auth/register/",
        "POST",
        userData
      );
      if (response.status !== 201) {
        console.log("response", response.data.message);
        const errorMessage =
          response.status !== 400 ? "unexpected error" : "invalid credentails";
        dispatch(showNotification("errorMessage3"));
        throw new Error(errorMessage);
      } else {
        return response.data;
      }
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
);
const loginData =
  localStorage.getItem("loginData") !== 0
    ? JSON.parse(localStorage.getItem("loginData"))
    : {};
const isLoggedIn =
  localStorage.getItem("isLoggedIn") !== 0
    ? localStorage.getItem("isLoggedIn")
    : false;
export const initialState = {
  loading: false,
  loginData: loginData,
  isLoggedIn: isLoggedIn,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.loginData = action.payload;
        state.isLoggedIn = true;
        localStorage.setItem("loginData", JSON.stringify(action.payload));
        localStorage.setItem("isLoggedIn", state.isLoggedIn);
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.loginData = action.payload;
        state.isLoggedIn = true;
        localStorage.setItem("loginData", JSON.stringify(action.payload));
        localStorage.setItem("isLoggedIn", state.isLoggedIn);
      });
  },
});

export default authenticationSlice.reducer;
