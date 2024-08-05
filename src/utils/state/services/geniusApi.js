import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GENIUS_API_URL } from "../../constants";
import convertToDurationString from "../../convertToDurationString";

export const geniusApi = createApi({
  reducerPath: "geniusApi",
  baseQuery: fetchBaseQuery({
    baseUrl: GENIUS_API_URL,
  }),
  endpoints: (builder) => ({
    fetchMatchingSongData: builder.query({
      async queryFn(args, queryApi, _extraOptions, fetchWithBQ) {
        // const queryParam = queryApi.getState();
        // console.log(queryParam);

        const searchParam = args;

        // 1st API call
        const {
          data: {
            response: {
              hits: [
                {
                  result: { api_path },
                },
              ],
            },
          },
        } = await fetchWithBQ(
          `/search?q=${searchParam}&access_token=${
            import.meta.env.VITE_GENIUS_TOKEN
          }`
        );

        // 2nd API call
        const { data: songData } = await fetchWithBQ(
          `${GENIUS_API_URL}${api_path}?access_token=${
            import.meta.env.VITE_GENIUS_TOKEN
          }`
        );

        const {
          song_art_primary_color: primaryColor,
          song_art_secondary_color: secondaryColor,
          song_art_text_color: textColor,
          title: trackTitle,
          release_date_for_display: releaseDate,
          song_art_image_url: trackCover,
          artist_names: trackArtists,
        } = songData?.response?.song;

        // const popularity = heroTrack.popularity;
        const popularity = 99;

        // const trackDuration = convertToDurationString(heroTrack.duration_ms);
        const trackDuration = 123;
        const ytKey = 1;

        return {
          data: {
            ytKey,
            primaryColor,
            secondaryColor,
            textColor,
            trackTitle,
            releaseDate,
            trackCover,
            trackArtists,
            popularity,
            trackDuration,
          },
        };
      },
    }),
  }),
});

export const { useFetchMatchingSongDataQuery } = geniusApi;
