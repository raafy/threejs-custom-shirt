import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIntro: (state, action) => {
      state.intro = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setIsLogoTexture: (state, action) => {
      state.isLogoTexture = action.payload;
    },
    setIsFullTexture: (state, action) => {
      state.isFullTexture = action.payload;
    },
    setLogoDecal: (state, action) => {
      state.logoDecal = action.payload;
    },
    setFullDecal: (state, action) => {
      state.fullDecal = action.payload;
    },
  },
});

export const {
  setIntro,
  setColor,
  setIsLogoTexture,
  setIsFullTexture,
  setLogoDecal,
  setFullDecal,
} = globalSlice.actions;

export default globalSlice.reducer;
