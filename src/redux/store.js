import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice.js";
import linksSlice from "./reducers/linksSlice.js";
import blogsclice from "./reducers/blogSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    links: linksSlice,
    blog: blogsclice,
  },
});

export default store;
