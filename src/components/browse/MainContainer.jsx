import React from "react";
import HeroCard from "./HeroCard";
import HeroBackground from "./HeroBackground";
import { geniusApi } from "../../utils/state/services/geniusApi";

const MainContainer = ({ songParam }) => {
  const { isLoading, heroMetaData } =
    geniusApi.endpoints.fetchMatchingSongData.useQueryState(songParam, {
      skip: false,
      selectFromResult: ({ isLoading, data }) => {
        return {
          isLoading,
          data,
        };
      },
    });

  if (isLoading) {
    return <div>Loading with additional data...</div>;
    // early return!
    // return Shimmer with additional info -> that is the song name! (keep animation to about 5s)
  }
  else 
  {
    return (
      <div>Loaded....</div>
    )
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
