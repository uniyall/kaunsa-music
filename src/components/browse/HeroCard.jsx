import React from "react";
import { useSelector } from "react-redux";

const HeroCard = ({
  coverImg,
  songTitle,
  artists,
  addedDate,
  duration,
  popularity,
  coverartPrimary,
  coverartSecondary,
  textColor,
  backgroundVidKey
}) => {
  console.log(coverartPrimary, coverartSecondary, textColor);
  const displayName = useSelector((store) => store.user.user.displayName);

  return (
    <div className="absolute min-h-screen w-screen flex items-center bg-gradient-to-r from-black from-25% top-0 text-white">
      <div className="w-max ml-7 h-max flex flex-col items-center justify-center absolute z-50 rounded-full">
        <div
          className="absolute bg-white p-1 rounded-md top-0 right-10 z-10 animated-background border border-white shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, ${coverartPrimary} 50%, ${coverartSecondary})`,
            border: `0.5px solid ${textColor}`,
          }}
        >
          <h1
            className="text-sm font-medium"
            style={{
              color: textColor,
            }}
          >{`TOP PICK FOR ${
            displayName.toUpperCase().split(" ")[0] ?? "YOU"
          }`}</h1>
        </div>
        <img
          className="w-[266.667px] rounded-xl"
          src={coverImg}
          alt="album cover image"
        />
        <h1 className="text-4xl w-[400px] font-bold text-center">
          {songTitle}
        </h1>
        <h3 className="text-lg font-semibold">{artists}</h3>
        <h3>{`${duration}`}</h3>
        <h3>{addedDate}</h3>
        <h3>{popularity}% 🔥</h3>
      </div>
    </div>
  );
};

export default HeroCard;
