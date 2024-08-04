import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Browse from "./components/browse/Browse.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/state/appStore.js";
import loadInitialTracks from "./utils/loadInitialTracks.js";
import Error from "./components/Error.jsx";
import { generateNewAccessToken } from "./utils/auth/tokenManage.js";

console.log("hey I am main jsx file yaar");

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
        loader: () => {
          console.log("loader fn is called");
          // I need to return a promise!
          return defer(loadInitialTracks());
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
