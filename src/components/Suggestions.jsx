import React from "react";

const Suggestions = ({ suggestions, inputQueryChanger, setShowSuggestions }) => {
  return (
    <div
      className="absolute w-full top-full border-2 rounded-b-md flex flex-col bg-white text-gray-600 z-10" // Added absolute positioning and z-index
    >
      {suggestions.map((suggestion, index) => {
        return (
          <div
            key={index}
            className="w-full border-b-2 text-sm p-1 hover:cursor-pointer hover:bg-gray-100"
            onClick={() => {
              inputQueryChanger(suggestion);
              setShowSuggestions(false); // Hide suggestions after selection
            }}
          >
            {suggestion}
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
