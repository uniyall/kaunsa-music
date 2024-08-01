import React from "react";
import { useSelector } from "react-redux";

const Header = () => {

  const user = useSelector((store) => store?.user);
  return (
    <div className="relative w-screen bg-gradient-to-b from-[#FFF8F3] to-[#FAF0E6] flex flex-col items-center">
      <h1 className="text-[#352F44] text-[31.25px] sm:text-[48.83px] p-1 m-1">
        Kaunsa Music?
      </h1>
      <h2 className="text-[#5C5470]">Confused what song to listen? We've got you!</h2>
    </div>
  );
};

export default Header;
