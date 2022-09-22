import { configureStore } from "@reduxjs/toolkit";

import blogsReducer from "./blogs/blogs.slice";
import { blogsApi } from "./blogs/blogs.api";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(blogsApi.middleware),
});
