import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SPOTIFY_API_URL } from "../../constants";
import heroSearchParamConstructor from "../../heroSearchParamConstructor";
import { customPlaylistFetch } from "../../axios/spotify";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SPOTIFY_API_URL,
  }),
  endpoints: (builder) => ({
    fetchSpotifyTracks: builder.query({
      async queryFn(args, queryApi, _extraOptions, fetchWithBQ) {
        const playlistId = args;
        try {
          const songs = await customPlaylistFetch.get(playlistId);
          const processed_obj_songs = heroSearchParamConstructor(
            songs.data.tracks.items
          );
          return {
            data: processed_obj_songs,
          };
        } catch (e) {
          return {
            error: e,
          };
        }
      },
    }),
  }),
});

export const { fetchSpotifyTracksQuery } = spotifyApi;

// fetchSpotifyTracks: builder.query({
//   query: (playlistId) => playlistId,
//   transformResponse: (response) => {
//     return heroSearchParamConstructor(response.tracks.items);
//   },
// }),
