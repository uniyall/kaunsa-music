import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    tracks: null,
  },
  reducers: {
    addTracks: (state, action) => {
      state.tracks = action.payload;
    },
    emptyTracks: (state) => {
      state.tracks = null;
    },
  },
});

export default musicSlice.reducer;

export const { addTracks, emptyTracks } = musicSlice.actions;
