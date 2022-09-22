import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: false,
  blogsInfo: [],
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: INITIAL_STATE,
  reducers: {
    fetchInitiate: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, { payload }) => {
      state.blogsInfo = payload;
      state.isLoading = false;
    },
    fetchFailed: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { fetchInitiate, fetchSuccess, fetchFailed } = blogsSlice.actions;

export default blogsSlice.reducer;
