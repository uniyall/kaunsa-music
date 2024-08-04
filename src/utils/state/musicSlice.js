import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    tracks: null,
    heroMetadata: null,
  },
  reducers: {
    addTracks: (state, action) => {
      state.tracks = action.payload;
    },
    emptyTracks: (state) => {
      state.tracks = null;
    },
    addHero: (state, action) => {
      state.heroMetadata = action.payload;
    },
    removeHero: (state) => {
      state.heroMetadata = null;
    },
  },
});

export default musicSlice.reducer;

export const { addTracks, emptyTracks, addHero, removeHero } =
  musicSlice.actions;
