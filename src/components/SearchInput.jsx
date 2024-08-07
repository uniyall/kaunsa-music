import React, { useState } from "react";
import useAutocomp from "../hooks/useAutocomp";
import Suggestions from "./Suggestions";
import { openaiApi } from "../utils/state/services/openaiApi";

const SearchInput = () => {
  const [trigger, result] =
    openaiApi.endpoints.fetchSongsRecommendation.useLazyQuery({});

  const [input, setInput] = useState("");

  const gptSuggestionRes = useAutocomp(input);
  console.log(gptSuggestionRes);

  return (
    <div className="w-2/5 flex gap-1">
      <div className="w-full flex flex-col">
        <input
          type="text"
          placeholder="What song do you wanna hear?"
          className="w-full p-2 rounded-md focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {gptSuggestionRes.isSuccess && gptSuggestionRes.status != "pending" ? (
          <Suggestions suggestions={gptSuggestionRes.data.suggestions} />
        ) : (
          ""
        )}
      </div>
      <div>
        <button
          className="text-white bg-gradient-to-r from-green-500 to-green-600 py-1 px-4 font-bold text-2xl rounded-md"
          onClick={() => {
            // call gpt with input as the param...
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
