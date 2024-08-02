import React from "react";

const SongBackground = ({ background }) => {
  return (
    <div className="w-full h-full opacity-90">
      <div className="w-full h-full opacity-0 absolute"></div>
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/Av9DvtlJ9_M?autoplay=1&mute=1&showinfo=0&controls=0&cc_load_policy=0&loop=1&playlist=Av9DvtlJ9_M"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default SongBackground;
