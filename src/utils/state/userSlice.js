import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    spotify_access_token: localStorage.getItem("spotify_access_token") || null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: () => {
      return {
        name: null,
        spotify_access_token: null,
      };
    },
    setSpotifyAccessToken: (state, action) => {
      state.spotify_access_token = action.payload;
    },
    removeSpotifyAccessToken: (state) => {
      state.spotify_access_token = null;
    },
  },
});

export const {
  setUser,
  removeUser,
  setSpotifyAccessToken,
  removeSpotifyAccessToken,
} = userSlice.actions;

export default userSlice.reducer;
