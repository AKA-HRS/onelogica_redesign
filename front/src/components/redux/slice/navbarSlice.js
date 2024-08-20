import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "bg-transparent text-white  relative",
  nav: "/",
};


const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
    setNav: (state, action) => {
      state.nav = action.payload;
    },
  },
});

export const { setBgColor, setNav } = navbarSlice.actions;

export default navbarSlice.reducer;
