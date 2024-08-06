import { useEffect } from "react";
import { SPOTIFY_PLAYLIST_ID } from "../utils/constants";
import { geniusApi } from "../utils/state/services/geniusApi";
import { spotifyApi } from "../utils/state/services/spotifyApi";
import appStore from "../utils/state/appStore";

function useHeroData() {
  const { isLoading, data } =
    spotifyApi.endpoints.fetchSpotifyTracks.useQueryState(SPOTIFY_PLAYLIST_ID, {
      skip: false,
      selectFromResult: ({ isLoading, data }) => {
        return {
          isLoading,
          data,
        };
      },
    });

  useEffect(() => {
    if (!isLoading) {
      console.log("logginf");

      appStore.dispatch(
        geniusApi.util.prefetch("fetchMatchingSongData", data?.searchParam, {
          force: true,
        })
      );
    }
  }, [isLoading]);

  console.log(isLoading);

  return data?.searchParam;
}

export default useHeroData;
