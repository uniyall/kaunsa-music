# kaunsaMusic

Confused what songs to listen? We've got you!

**Steps to run in Local**:

1. Install all dependencies

   ```bash
   npm install
   ```

2. Create .env file at root and copy over the environment variables from [my gist file](https://gist.github.com/uniyall/f77ab597a1a0b7a2b5fb60ec91a9c2a5)

3. Run the project on local server
   ```bash
   npm run dev
   ```
4. To authenticate, you can either signup from the frontend, or use the following credentials : 
    ```
    Email Address - test@test.com
    Password - Test@Test@1234
    ```

**Major Dependencies**:
1. [Firebase](https://firebase.google.com/docs/auth) - For managed and serverless Authentication
2. [TailwindCSS](https://tailwindcss.com/docs/installation) - For styling 
3. [Spotify Web API](https://developer.spotify.com/documentation/web-api) - For fetching song details of specific Spotify managed playlists ('Top x Songs' etc)
4. [Genius API](https://docs.genius.com/) - For fetching detailed meta data of individual songs 
5. [YouTube Player API](https://developers.google.com/youtube/iframe_api_reference) - For video playback of song music video 
6. [React Router](https://reactrouter.com/en/main) - For routing 
7. [Redux Toolkit](https://redux-toolkit.js.org/usage/usage-guide) - For state management 