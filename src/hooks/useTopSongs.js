import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTracks } from "../utils/state/musicSlice";

function useTopSongs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fn = async () => {
      const data = await fetch(import.meta.env.VITE_SPOTIFY_API_URL, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_TOKEN}`,
        },
      });

      const json = await data.json();
      console.log(json.tracks.items);
      dispatch(addTracks(json.tracks.items));
    };
    fn();
  }, []);
}

export default useTopSongs;
