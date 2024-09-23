import React, { useState, useEffect, useRef } from "react";
import useAutocomp from "../hooks/useAutocomp";
import Suggestions from "./Suggestions";
import { openaiApi } from "../utils/state/services/openaiApi";

const SearchInput = () => {
  const [trigger, result] =
    openaiApi.endpoints.fetchSongsRecommendation.useLazyQuery({});

  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const gptSuggestionRes = useAutocomp(input);
  console.log(gptSuggestionRes);

  const wrapperRef = useRef(null); // Use this ref to detect clicks outside

  // Hook to handle click outside of search input or suggestions
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="w-2/5 flex gap-1" ref={wrapperRef}>
      <div className="w-full flex flex-col relative"> {/* Relative positioning for suggestions */}
        <input
          type="text"
          placeholder="What song do you wanna hear?"
          className="w-full p-2 rounded-md focus:outline-none"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowSuggestions(true); // Show suggestions when typing
          }}
        />
        {gptSuggestionRes.isSuccess && gptSuggestionRes.status !== "pending" && showSuggestions && (
          <Suggestions
            suggestions={gptSuggestionRes.data.suggestions}
            inputQueryChanger={setInput}
            setShowSuggestions={setShowSuggestions} // Pass the setter to hide suggestions when selecting
          />
        )}
      </div>
      <div>
        <button
          className="text-white bg-gradient-to-r from-green-500 to-green-600 py-1 px-4 font-bold text-2xl rounded-md"
          onClick={() => {
            // Call GPT with input as the param...
            trigger(input, false);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
