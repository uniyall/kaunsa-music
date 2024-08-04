import { useEffect } from "react";
import { YT_IFRAME_API_URL } from "../utils/constants";

function useLoadHeroVideo(backgroundVidKey) {
  if (!backgroundVidKey) return;
  useEffect(() => {
    if (!window.YT) {
      var tag = document.createElement("script");
      tag.src = YT_IFRAME_API_URL;
      window.onYouTubeIframeAPIReady = loadVideo;
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      loadVideo();
    }
  }, []);

  function loadVideo() {
    let startSeconds = 0;
    let endSeconds = 60;

    const player = new window.YT.Player("player", {
      videoId: backgroundVidKey,
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        fs: 1,
        cc_load_policy: 0,
        iv_load_policy: 3,
        start: startSeconds,
        end: endSeconds,
        autohide: 1,
        mute: 1,
      },
      events: {
        onStateChange: (state) => {
          if (state.data === window.YT.PlayerState.ENDED) {
            player.seekTo(startSeconds);
          }
        },
      },
    });
  }
}

export default useLoadHeroVideo;
