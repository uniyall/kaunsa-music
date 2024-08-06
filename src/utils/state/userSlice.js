import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    spotify_access_token: localStorage.getItem("spotify_access_token") || null,
    ytBgLoadable : false
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
    setYtBgLoadable : (state, action) => {
      state.ytBgLoadable = action.payload;
    }
  },
});

export const {
  setUser,
  removeUser,
  setSpotifyAccessToken,
  removeSpotifyAccessToken,
  setYtBgLoadable
} = userSlice.actions;

export default userSlice.reducer;
