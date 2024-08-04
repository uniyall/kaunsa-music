import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addHero } from "../utils/state/musicSlice";
import { GENIUS_API_URL } from "../utils/constants";

function convertToDurationString(durationMs) {
  const totalSec = Math.floor(durationMs / 1000);
  let mins = Math.floor(totalSec / 60);
  let seconds = totalSec % 60;
  let duration = `${mins} min ${seconds} sec`;
  return duration;
}

function useHeroMetadata() {
  const dispatch = useDispatch();
  const music = useSelector((store) => store.music.tracks);

  useEffect(() => {
    if (music) {
      heroDataFetch();
    }
  }, [music]);

  async function heroDataFetch() {
    // Explicit check -> Hero track must not be an explicit song
    let eCheck = true;

    while (eCheck) {
      const randomIndex = Math.floor(Math.random() * 50);
      console.log(randomIndex);
      var randomTrack = music[randomIndex];
      eCheck = false;
      // eCheck = randomTrack.track.explicit;
    }

    const heroTrack = randomTrack.track;
    const artist = heroTrack.artists[0].name;

    const cleaningRegex = /^[\(\-\[\{].*/;

    let stopAdding = false;
    const songString = heroTrack.name
      .split(" ")
      .filter((songWord) =>
        !cleaningRegex.test(songWord) && !stopAdding
          ? true
          : ((stopAdding = false), false)
      )
      .join("%20")
      .trim();

    const artistString = artist.split(" ").join("%20").trim();

    const searchParam = `${songString}%20${artistString}`;

    axios
      .get(
        `${GENIUS_API_URL}/search?q=${searchParam}&access_token=${
          import.meta.env.VITE_GENIUS_TOKEN
        }`
      )
      .then(
        ({
          data: {
            response: {
              hits: [
                {
                  result: { api_path },
                },
              ],
            },
          },
        }) =>
          axios.get(
            `${GENIUS_API_URL}${api_path}?access_token=${
              import.meta.env.VITE_GENIUS_TOKEN
            }`
          )
      )
      .then(({ data: songData }) => {
        const ytKey = songData?.response?.song?.media
          ?.filter(
            (media) => media.type == "video" && media.provider == "youtube"
          )?.[0]
          ?.url.match(/[?&]v=([^&]+)/)?.[1];

        const {
          song_art_primary_color: primaryColor,
          song_art_secondary_color: secondaryColor,
          song_art_text_color: textColor,
          title: trackTitle,
          release_date_for_display: releaseDate,
          song_art_image_url: trackCover,
          artist_names: trackArtists,
        } = songData?.response?.song;

        const popularity = heroTrack.popularity;
        const trackDuration = convertToDurationString(heroTrack.duration_ms);

        dispatch(
          addHero({
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
          })
        );
      })
      .catch((e) => null);
  }
}

export default useHeroMetadata;
