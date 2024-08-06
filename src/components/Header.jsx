import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import LogoutShimmer from "./LogoutShimmer";
import { geniusApi } from "../utils/state/services/geniusApi";
import { spotifyApi } from "../utils/state/services/spotifyApi";
import { SPOTIFY_PLAYLIST_ID } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store?.user.user);
  const ytVideoLoadable = useSelector((store) => store?.user?.ytBgLoadable);
  console.log(ytVideoLoadable);

  const navigate = useNavigate();

  function handleSignout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  return (
    <div
      className={`${
        ytVideoLoadable
          ? "bg-gradient-to-b from-black from-60%"
          : "bg-transparent"
      } px-5 absolute w-screen flex justify-between items-center z-50 header`}
    >
      <h1 className="text-white text-[31.25px] sm:text-[48.83px] p-1 m-1">
        Kaunsa Music?
      </h1>
      <input
        type="text"
        placeholder="What song do you wanna hear?"
        className="w-2/5 p-2 rounded-md"
      />

      {user ? (
        <button
          className="bg-gradient-to-r from-red-800 to-red-700 hover:text-red-950 hover:ease-linear duration-200 hover:bg-gradient-to-r hover:to-white hover:from-white text-white p-1 rounded-lg hover:shadow-2xl"
          onClick={handleSignout}
        >
          Logout
        </button>
      ) : (
        <LogoutShimmer />
      )}
    </div>
  );
};

export default Header;
