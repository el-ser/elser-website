import { configureStore } from "@reduxjs/toolkit";

import { blogsApi } from "./blogs/blogs.api";

export const store = configureStore({
  reducer: {
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(blogsApi.middleware),
});
