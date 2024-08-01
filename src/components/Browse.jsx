import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  function handleSignout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate('/error');
      });
  }
  return (
    <div>
      <h1>You are logged in {user?.displayName}</h1>
      <button onClick={handleSignout}>Log out</button>
    </div>
  );
};

export default Browse;
