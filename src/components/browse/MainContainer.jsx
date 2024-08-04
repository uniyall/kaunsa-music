import React from "react";
import { useSelector } from "react-redux";
import HeroCard from "./HeroCard";
import HeroBackground from "./HeroBackground";
import useHeroMetadata from "../../hooks/useHeroMetadata";
import HeroBgShimmer from "./HeroBgShimmer";

const MainContainer = () => {
  useHeroMetadata();
  const heroMetaData = useSelector((store) => store.music.heroMetadata);

  if (!heroMetaData) {
    return <HeroBgShimmer />;
  }

  const {
    ytKey,
    primaryColor,
    secondaryColor,
    textColor,
    trackCover,
    trackTitle,
    trackArtists,
    trackDuration,
    releaseDate,
    popularity,
  } = heroMetaData;

  return (
    <div className="w-screen aspect-video relative -top-[60px]">
      <HeroBackground
        backgroundVidKey={ytKey}
        coverartPrimary={primaryColor}
        coverartSecondary={secondaryColor}
        textColor={textColor}
      />
      <HeroCard
        coverImg={trackCover}
        songTitle={trackTitle}
        artists={trackArtists}
        duration={trackDuration}
        addedDate={releaseDate}
        popularity={popularity}
      />
    </div>
  );
};

export default MainContainer;
