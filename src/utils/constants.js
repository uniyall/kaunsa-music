export const SPOTIFY_API_URL = `https://api.spotify.com/v1/playlists/`;

export const SPOTIFY_REFRESH_TOKEN_API_URL =
  "https://accounts.spotify.com/api/token/";

// export const SPOTIFY_PLAYLIST_ID = "37i9dQZEVXbMDoHDwVN2tF";
export const SPOTIFY_PLAYLIST_ID = "37i9dQZF1DX0XUfTFmNBRM";

export const GENIUS_API_URL = "https://api.genius.com";

export const YT_IFRAME_API_URL = "https://www.youtube.com/iframe_api";

export const OPENAI_AUTOCOMPLETION_INSTRUCTIONS = `You will be provided with a string entered by a user in a music recommendation app. Based on that string, construct 5 strings that are reasonably autocompletion suggestions for the user. Make sure to always return a JSON with the format -
**
{
suggestions : [
'suggestion 1',
'suggestion 2',
'suggestion 3',
'suggestion 4',
'suggestion 5',
]
}
**`;

export const OPENAI_SUGGESTIONS_INSTRUCTIONS = `You are an expert song suggester. You will receive a request for songs recommendation, total of 5. Decide on the basis of the user's request. It can directly ask for a song, or by a artist or can be an abstract feeling about a song, in which case make your best attempt to find 5 songs in you scope. They can be in any language, but give more preference to English and Hindi songs. The response should be a JSON of the following format : 
**
{
    "recommendations" : [
        {
            "song_track_title" : "Song Name",
            "primary artist name" : "Artist Name"
        }
        // total of 5 objects
    ]
}
**

Make sure to return the json with 5 songs, with their title name and the primary artist name. Give preference to recent songs.`;
