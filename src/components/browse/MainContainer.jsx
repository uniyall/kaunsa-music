import React, { useEffect } from "react";
import HeroCard from "./HeroCard";
import HeroBackground from "./HeroBackground";
import { geniusApi } from "../../utils/state/services/geniusApi";
import OnlyTitleShimmer from "./OnlyTitleShimmer";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { setYtBgLoadable } from "../../utils/state/userSlice";

const MainContainer = ({ songParam }) => {
  const dispatch = useDispatch();
  const { data: heroMetaData } =
    geniusApi.endpoints.fetchMatchingSongData.useQueryState(songParam, {
      skip: false,
      selectFromResult: ({ isLoading, data }) => {
        return {
          data,
        };
      },
    });

  useEffect(() => {
    if (heroMetaData) {
      dispatch(setYtBgLoadable(heroMetaData?.ytKey));
    }
  }, [heroMetaData]);

  if (!heroMetaData) {
    return <OnlyTitleShimmer />;
    // early return!
    // return Shimmer with additional info -> that is the song name! (keep animation to about 5s)
  }
  // main stuff to render now finally

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
    <div className="w-screen h-screen relative">
      <HeroBackground
        backgroundVidKey={ytKey}
        coverartPrimary={primaryColor}
        coverartSecondary={secondaryColor}
      />
      <HeroCard
        backgroundVidKey={ytKey}
        coverImg={trackCover}
        songTitle={trackTitle}
        artists={trackArtists}
        duration={trackDuration}
        addedDate={releaseDate}
        popularity={popularity}
        coverartPrimary={primaryColor}
        coverartSecondary={secondaryColor}
        textColor={textColor}
      />
      <Footer backgroundVidKey={ytKey} />
    </div>
  );
};

export default MainContainer;
