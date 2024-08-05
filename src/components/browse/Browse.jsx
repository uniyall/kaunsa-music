import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import HeroBgShimmer from "./HeroBgShimmer";
import useHeroData from "../../hooks/useHeroData";


const Browse = () => {

  const data = useHeroData();

  if (!data) {
    // return <HeroBgShimmer />;
    return (
      <div>Nothing yet...</div>
    )
  }

  if (data) {
    return (
      <div>
        <MainContainer songParam={data}/>
        {/* <SecondaryContainer /> */}
      </div>
    );
  }
};

export default Browse;
