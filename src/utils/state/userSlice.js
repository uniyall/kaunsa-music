import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
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
    setYtBgLoadable : (state, action) => {
      state.ytBgLoadable = action.payload;
    }
  },
});

export const {
  setUser,
  removeUser,
  setYtBgLoadable
} = userSlice.actions;

export default userSlice.reducer;
