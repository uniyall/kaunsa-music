import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import HeroBgShimmer from "./HeroBgShimmer";
import useHeroData from "../../hooks/useHeroData";

const Browse = () => {
  
  const data = useHeroData();
  console.log(data);
  

  if (!data) {
    return <HeroBgShimmer />;
  }

  if (data) {
    console.log(data);
    return (
      <div>
        <MainContainer songParam={data} />
        {/* <SecondaryContainer /> */}
      </div>
    );
  }
};

export default Browse;
