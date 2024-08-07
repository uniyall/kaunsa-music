import { useEffect } from "react";
import { openaiApi } from "../utils/state/services/openaiApi";

function makeDebounce() {
  let id;
  return (fn, input) => {
    if (id) {
      console.log("hell");
      clearTimeout(id);
    }

    id = setTimeout(() => {
      console.log("called");
      fn(input, false);
    }, 3000);
  };
}

const deBouncedFn = makeDebounce();

function useAutocomp(input) {
  const [trigger, result] =
    openaiApi.endpoints.fetchSearchAutoCompletions.useLazyQuery({});

  useEffect(() => {
    console.log("effect");

    if (input.length >= 3) {
      deBouncedFn(trigger, input);
    }
  }, [input]);

  return result;
}

export default useAutocomp;
