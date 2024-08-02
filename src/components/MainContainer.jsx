import React from "react";
import { useSelector } from "react-redux";
import SongCard from "./SongCard";
import SongBackground from "./SongBackground";

const MainContainer = () => {
  const music = useSelector((store) => store.music.tracks);
  if (!music) return;

  const heroTrack = music[0];

  function convertToMonthYear(iso) {
    const date = new Date(iso);
    const options = { year: "numeric", month: "long" };
    const monthYear = date.toLocaleString("en-US", options);
    return monthYear;
  }

  const totalSec = Math.floor(heroTrack.track.duration_ms / 1000);
  let mins = Math.floor(totalSec / 60);
  let seconds = totalSec % 60;
  let duration = `${mins} min ${seconds} sec`;

  return (
    <div className="w-screen aspect-video relative -top-[60px]">
      <SongBackground background={heroTrack.track.album.images[0].url} />
      <SongCard
        coverImg={heroTrack.track.album.images[1].url}
        songTitle={heroTrack.track.name}
        artists={heroTrack.track.artists.map((item) => item.name).join(", ")}
        duration={duration}
        addedDate={convertToMonthYear(heroTrack.added_at)}
        isExplicit={heroTrack.track.explicit}
        popularity={heroTrack.track.popularity}
      />
    </div>
  );
};

export default MainContainer;
