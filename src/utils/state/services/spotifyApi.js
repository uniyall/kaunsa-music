import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SPOTIFY_API_URL } from "../../constants";
import heroSearchParamConstructor from "../../heroSearchParamConstructor";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SPOTIFY_API_URL,
    headers: {
      Authorization: `Bearer BQDEbzzp54HJyCXP2WcrTM_vyn_gTaZm5MORl0iDZCxlYsDBkut1AB5TQSWTcEDUiiz5mh9PAiXss2Mnzj_p2T13UhK-kelLKDgZkxeYOU7p-EJi_o6RgAF1nRdI0Rq5Z-nljNWW9Ba8R5S8DPwhQg92qqtRAkc14N7KX74qtzGAR7wFH3AL5aRmradNw26sihGZVkSZP32OTnupOZ4_fkVfEXI`,
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
