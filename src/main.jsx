import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Browse from "./components/browse/Browse.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/state/appStore.js";
import Error from "./components/Error.jsx";
import { spotifyApi } from "./utils/state/services/spotifyApi.js";
import { SPOTIFY_PLAYLIST_ID } from "./utils/constants.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        loader: async () => {
          appStore.dispatch(
            spotifyApi.util.prefetch(
              "fetchSpotifyTracks",
              SPOTIFY_PLAYLIST_ID,
              { force: true }
            )
          );
          return null;
        },
        element: <Browse />,

        shouldRevalidate: () => false,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
