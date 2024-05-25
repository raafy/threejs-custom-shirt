import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  intro: boolean;
  color: string;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: string;
  fullDecal: string;
}

const initialState: GlobalState = {
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
    setIntro: (state, action: PayloadAction<boolean>) => {
      state.intro = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { setIntro, setColor } = globalSlice.actions;

export default globalSlice.reducer;
