import { useEffect } from "react";
import { SPOTIFY_PLAYLIST_ID } from "../utils/constants";
import { geniusApi } from "../utils/state/services/geniusApi";
import { spotifyApi } from "../utils/state/services/spotifyApi";
import appStore from "../utils/state/appStore";

function useHeroData() {
  const spotify_state = spotifyApi.endpoints.fetchSpotifyTracks.useQueryState(
    SPOTIFY_PLAYLIST_ID,
    {
      skip: false,
    }
  );
  
  const { isError, isLoading, data } = spotify_state


  useEffect(() => {
    if (!isError) {
      appStore.dispatch(
        geniusApi.util.prefetch("fetchMatchingSongData", data?.searchParam, {
          force: true,
        })
      );
    }
  }, [isLoading]);

  return data?.searchParam;
}

export default useHeroData;
