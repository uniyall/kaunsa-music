import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();

  function handleSignout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  return (
    <div className="relative bg-gradient-to-b from-black from-60% w-screen flex justify-around items-center z-10">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-[31.25px] sm:text-[48.83px] p-1 m-1">
          Kaunsa Music?
        </h1>
        <h2 className="text-[#5C5470 text-white relative top-10">
          Confused what song to listen? We've got you!
        </h2>
      </div>
      {user ? (
        <div>
          <button
            className="bg-red-500 text-white p-1 rounded-lg"
            onClick={handleSignout}
          >
            Log out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
