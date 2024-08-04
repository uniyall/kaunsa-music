import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import {
  setUser,
  removeUser,
  removeSpotifyAccessToken,
  setSpotifyAccessToken,
} from "./utils/state/userSlice";
import { emptyTracks } from "./utils/state/musicSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("spotify_access_token");
    if (!token) {
      dispatch(removeSpotifyAccessToken());
    } else {
      dispatch(setSpotifyAccessToken(token));
    }

    window.addEventListener("storage", () => {
      const token = localStorage.getItem("spotify_access_token");
      if (!token) {
        dispatch(removeSpotifyAccessToken());
      } else {
        dispatch(setSpotifyAccessToken(token));
      }
    });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //signin / signup
        const { uid, displayName, email } = user;
        dispatch(
          setUser({
            uid,
            displayName,
            email,
          })
        );

        navigate("/browse");
      } else {
        // logged out
        dispatch(removeUser());
        dispatch(emptyTracks());
        navigate("/");
      }
    });

    // unsubscribe on component unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className="relative bg-black">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
