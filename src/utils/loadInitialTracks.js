import axios from "axios";
import appStore from "./state/appStore";
import { addTracks } from "./state/musicSlice";
import { SPOTIFY_TODAYS_TOP_HITS_API_URL } from "./constants";
import { generateNewAccessToken } from "./auth/tokenManage";

function loadInitialTracks() {
  return generateNewAccessToken().then((res) => {
    let token =
      res?.lastStepToken ||
      (res?.data?.access_token,
      localStorage.setItem("spotify_access_token", res?.data?.access_token));

    return axios
      .get(SPOTIFY_TODAYS_TOP_HITS_API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((tracksList) =>
        appStore.dispatch(addTracks(tracksList.data.tracks.items))
      );
  });
}

export default loadInitialTracks;
