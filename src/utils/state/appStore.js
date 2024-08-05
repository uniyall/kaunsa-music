import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import musicSlice from "./musicSlice";
import { spotifyApi } from "./services/spotifyApi";
import { geniusApi } from "./services/geniusApi";

const appStore = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    [geniusApi.reducerPath]: geniusApi.reducer,
    user: userSlice,
    music: musicSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(spotifyApi.middleware)
      .concat(geniusApi.middleware),
});

export default appStore;
