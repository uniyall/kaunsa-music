import React, { useState } from "react";

const Suggestions = ({ suggestions }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div
      className={`w-full relative ${
        isHidden ? "hidden" : ""
      } -top-1 border-2 rounded-b-md flex flex-col bg-white text-gray-600`}
      // onMouseLeave={() => {
      //   let t = setTimeout(() => {
      //     setIsHidden(true);
      //   });
      // }}
    >
      {suggestions.map((suggestion) => {
        return (
          <div className="w-full border-b-2 text-sm p-1 hover:cursor-pointer hover:bg-gray-100">
            {suggestion}
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
