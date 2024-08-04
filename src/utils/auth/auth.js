import axios from "axios";
import { SPOTIFY_REFRESH_TOKEN_API_URL } from "../constants";

export const getAccessToken = async () => {
  const response = await axios.post(
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

  localStorage.setItem("spotify_access_token", response.data?.access_token);
  return response.data?.access_token;
};
