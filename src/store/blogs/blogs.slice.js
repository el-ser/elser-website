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
    fetchSuccess: (state, action) => {
      const { payload } = action;
      state.blogsInfo = payload;
      state.isLoading = false;
    },
    fetchFailed: (state, action) => {
      const { payload } = action;
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { fetchInitiate, fetchSuccess, fetchFailed } = blogsSlice.actions;

export default blogsSlice.reducer;
