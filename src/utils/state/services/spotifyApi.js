import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SPOTIFY_API_URL } from "../../constants";
import heroSearchParamConstructor from "../../heroSearchParamConstructor";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SPOTIFY_API_URL,
    headers: {
      Authorization: `Bearer ${}`,
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
