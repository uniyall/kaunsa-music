import React, { useEffect, useState } from "react";
import useLoadHeroVideo from "../../hooks/useLoadHeroVideo";

const HeroBackground = ({
  backgroundVidKey,
  coverartPrimary,
  coverartSecondary,
  textColor,
}) => {
  useLoadHeroVideo(backgroundVidKey);

  return (
    <div className="relative w-full h-full">
      {!backgroundVidKey ? (
        <div
          className={"w-full h-full m-auto animated-background"}
          style={{
            backgroundImage: `linear-gradient(to right, ${coverartPrimary} 50%, ${coverartSecondary})`,
          }}
        ></div>
      ) : (
        <div className={`w-full h-full bg-black absolute z-100 top-0`}>
          <div id="player"></div>
        </div>
      )}
    </div>
  );
};

export default HeroBackground;
