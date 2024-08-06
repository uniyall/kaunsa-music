import React from "react";

const Footer = ({ backgroundVidKey }) => {
  return (
    <div
      className={`absolute ${
        backgroundVidKey ? "bg-gradient-to-t from-black from-75%" : "bg-transparent"
      } bottom-0  w-screen h-[30%] z-1`}
    ></div>
  );
};

export default Footer;

// from-black from-75%
