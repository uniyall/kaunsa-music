import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { spotifyApi } from "./services/spotifyApi";
import { geniusApi } from "./services/geniusApi";
import { openaiApi } from "./services/openaiApi";

const appStore = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    [geniusApi.reducerPath]: geniusApi.reducer,
    [openaiApi.reducerPath]: openaiApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(spotifyApi.middleware)
      .concat(geniusApi.middleware)
      .concat(openaiApi.middleware),
});

export default appStore;
