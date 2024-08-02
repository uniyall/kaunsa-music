import React from "react";

const SongCard = ({
  coverImg,
  songTitle,
  artists,
  addedDate,
  duration,
  isExplicit,
  popularity,
}) => {
  return (
    <div className="w-screen h-full absolute bg-gradient-to-r from-black top-[60px] text-white">
      <div className="w-[400px] p-5 h-[400px] flex flex-col items-center absolute top-[55px]">
        <div className="absolute bg-white p-1 rounded-md right-10 z-20 bg-opacity-90">
          <h1 className="text-sm font-bold text-black">
            TOP SONG
          </h1>
        </div>
        <img
          className="w-2/3 rounded-xl relative"
          src={coverImg}
          alt="album cover image"
        />
        <h1 className="text-4xl font-bold">{songTitle}</h1>
        <h3 className="text-lg font-semibold">{artists}</h3>
        <h3>{`${duration}`}</h3>
        <h3>{addedDate}</h3>
        {isExplicit ? <h3>'E'</h3> : null}
        <h3>{popularity}% 🔥</h3>
      </div>
    </div>
  );
};

export const HeroSongCard = (SongCard) => {
  return (
    <div className="border-2 border-indigo-800">
      <SongCard />
    </div>
  );
};

export default SongCard;
