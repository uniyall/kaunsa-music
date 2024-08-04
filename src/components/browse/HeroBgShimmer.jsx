import React from "react";

const HeroBgShimmer = () => {
  return (
    <div className="w-screen relative aspect-video bg-gray-100">
      <div className="w-[400px] p-5 h-[400px] flex flex-col items-center absolute top-[55px]">
        <div
          className="w-2/3 h-2/3 bg-gray-200 rounded-xl absolute animate-pulse"
          alt="album cover image"
        ></div>
      </div>
      ;
    </div>
  );
};

export default HeroBgShimmer;
