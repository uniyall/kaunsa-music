import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GENIUS_API_URL } from "../../constants";

export const geniusApi = createApi({
  reducerPath: "geniusApi",
  baseQuery: fetchBaseQuery({
    baseUrl: GENIUS_API_URL,
  }),
  endpoints: (builder) => ({
    fetchMatchingSongData: builder.query({
      async queryFn(args, queryApi, _extraOptions, fetchWithBQ) {
        
        const searchParam = args;
        const {
          spotifyApi: { queries },
        } = queryApi.getState();

        const {
          data: { trackDurationString: trackDuration, popularity },
        } = Object.entries(queries)[0][1];

        console.log(trackDuration, popularity);

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
        const {
          data: {
            response: { song },
          },
        } = await fetchWithBQ(
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
          media: ytArray,
        } = song;

        const ytKey = ytArray
          ?.filter(
            (media) => media.type == "video" && media.provider == "youtube"
          )?.[0]
          ?.url.match(/[?&]v=([^&]+)/)?.[1];

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
