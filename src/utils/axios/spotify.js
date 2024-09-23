import axios from "axios";
import { SPOTIFY_API_URL, SPOTIFY_REFRESH_TOKEN_API_URL } from "../constants";

// Create an Axios instance for Spotify API
export const customPlaylistFetch = axios.create({
  baseURL: SPOTIFY_API_URL,
});

// Request interceptor to add access token to headers
customPlaylistFetch.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("spotify_access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to refresh access token
const refreshToken = async () => {
  try {

    const resp = await axios.get(import.meta.env.VITE_REFRESHER_API);

    console.log("refresh token", resp.data);
    return resp.data.access_token;
  } catch (e) {
    console.log("Error", e);
    return null; // Return null if token refresh fails
  }
};

// Response interceptor to handle token expiration (401 errors)
customPlaylistFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // If error is 401 (Unauthorized) and we haven't retried this request yet
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const access_token = await refreshToken();

      // If we successfully retrieved a new access token
      if (access_token) {
        // Update the original request with the new token
        originalRequest.headers["Authorization"] = `Bearer ${access_token}`;

        // Update the stored token in localStorage
        localStorage.setItem("spotify_access_token", access_token);

        // Retry the original request with the new token
        return customPlaylistFetch(originalRequest);
      }
    }

    // If it's not a 401 error or token refresh failed, reject the promise
    return Promise.reject(error);
  }
);
