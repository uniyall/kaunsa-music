import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SPOTIFY_API_URL } from "../../constants";
import heroSearchParamConstructor from "../../heroSearchParamConstructor";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SPOTIFY_API_URL,
    headers: {
      Authorization: `Bearer BQD1wpcy-cA3tYxDYojMbbL0GulhiwpJ_Vel-LPCetJ5q9wli2mxgXjNblQKptPzDQa6I7_F96rPmUOkXCngyIIg0S2rM8ijRYc1_9vzESix4v5sX5FrsqaeMb0T39nFn1KbRog8-HP5j9Z-qaNBwSAnnZ51K8VbPdKSnpGxQVAukUIMbYTvyEQRtuetUUO6JwfJHm5XQByHvnkEyUCh_-Yi150`,
    },
  }),
  endpoints: (builder) => ({
    fetchSpotifyTracks: builder.query({
      query: (playlistId) => playlistId,
      transformResponse: (response) => {
        return heroSearchParamConstructor(response.tracks.items);
      },
    }),
  }),
});
