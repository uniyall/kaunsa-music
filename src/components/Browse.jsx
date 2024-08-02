import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import useTopSongs from "../hooks/useTopSongs";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useTopSongs();
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
