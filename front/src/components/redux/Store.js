import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slice/navbarSlice";
import blogReducer from "./slice/blogSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    blog: blogReducer,
  },
});
