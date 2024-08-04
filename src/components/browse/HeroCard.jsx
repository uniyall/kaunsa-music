import React from "react";

const HeroCard = ({
  coverImg,
  songTitle,
  artists,
  addedDate,
  duration,
  popularity,
}) => {
  return (
    <div className="w-screen h-full absolute top-[60px] text-white">
      <div className="w-[400px] p-5 h-[400px] flex flex-col items-center absolute top-[55px]">
        <div className="absolute bg-white p-1 rounded-md right-10 z-10 bg-opacity-90">
          <h1 className="text-sm font-bold text-black">TOP SONG</h1>
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
        <h3>{popularity}% 🔥</h3>
      </div>
    </div>
  );
};

export default HeroCard;
