import { useEffect } from "react";
import { SPOTIFY_PLAYLIST_ID } from "../utils/constants";
import { geniusApi } from "../utils/state/services/geniusApi";
import { spotifyApi } from "../utils/state/services/spotifyApi";
import appStore from "../utils/state/appStore";

function useHeroData() {
  const {
    isError
  } = spotifyApi.endpoints.fetchSpotifyTracks.useQueryState(
    SPOTIFY_PLAYLIST_ID,
    {
      skip: false,
    }
  );

  console.log(spotify_state);

  useEffect(() => {
    if (!isError) {
      appStore.dispatch(
        geniusApi.util.prefetch("fetchMatchingSongData", data?.searchParam, {
          force: true,
        })
      );
    }
  }, [spotify_state.isLoading]);

  return data?.searchParam;
}

export default useHeroData;
