import axios from "axios";
import { SPOTIFY_REFRESH_TOKEN_API_URL } from "../constants";

export const generateNewAccessToken = () => {
  const token = localStorage.getItem("spotify_access_token");
  if (token) return new Promise((res) => res({ lastStepToken: token }));

  return axios.post(
    SPOTIFY_REFRESH_TOKEN_API_URL,
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${import.meta.env.VITE_SPOTIFY_AUTH}`,
      },
    }
  );
};
