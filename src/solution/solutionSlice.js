import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../api";
export const fetchSolutionData = createAsyncThunk(
  "solution/fetchSolutionData",
  async () => {
    try {
      const response = await apiCall("api/article/");
      return response.data
    } catch (error) {
      throw error;
    }
  }
);

export const fetchSolutionDetails = createAsyncThunk(
  "solution/fetchSolutionDetails",
  async (slug) => {
    try {
      const response = await apiCall(`api/article/${slug}`);
      return response.data
    } catch (error) {
      throw error;
    }
  }
);


export const initialState = {
  isLoading: false,
  solutionData: [],
  solutionDetails: {},
};

export const solutionSlice = createSlice({
  name: "solution",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSolutionData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSolutionData.fulfilled, (state, action) => {
        state.solutionData = action.payload
        state.isLoading = false;
      })
      .addCase(fetchSolutionDetails.pending, (state) => {
        state.isLoading = true;
        state.solutionDetails = {}
      })
      .addCase(fetchSolutionDetails.fulfilled, (state, action) => {
        state.solutionDetails = action.payload
        state.isLoading = false;
      });
    },
});

export default solutionSlice.reducer;
