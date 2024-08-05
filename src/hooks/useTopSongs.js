import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTracks } from "../utils/state/musicSlice";
import { SPOTIFY_TODAYS_TOP_HITS_API_URL } from "../utils/constants";
import axios from "axios";
import { getAccessToken } from "../utils/auth/tokenManage";

function useTodayTopSongs() {
  const dispatch = useDispatch();
  let token = useSelector((store) => store.user.spotify_access_token);
  
  // if the token has not expired and it is in local storage, then the const above will be good to go
  if (!token) {
    const tokenPromise = getAccessToken();
    tokenPromise.then((data) => {});
  }

  useEffect(() => {
    const fn = async () => {
      try {
        const tracksList = await axios.get(SPOTIFY_TODAYS_TOP_HITS_API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(addTracks(tracksList.data.tracks.items));
      } catch (e) {
        if (e.response.status === 401) {
          // needs refresh token
          localStorage.removeItem("spotify_access_token");
          window.dispatchEvent(new Event("storage"));
          getAccessToken();
        }
      }
    };
    fn();
  }, [token]);
}

export default useTodayTopSongs;
