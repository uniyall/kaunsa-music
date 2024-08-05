function heroSearchParamConstructor(music) {
  let eCheck = true;

  while (eCheck) {
    const randomIndex = Math.floor(Math.random() * 50);
    var randomTrack = music[randomIndex];
    eCheck = randomTrack.track.explicit;
  }

  const heroTrack = randomTrack.track;
  const artist = heroTrack.artists[0].name;

  const cleaningRegex = /^[\(\-\[\{].*/;

  let stopAdding = false;
  const songString = heroTrack.name
    .split(" ")
    .filter((songWord) =>
      !cleaningRegex.test(songWord) && !stopAdding
        ? true
        : ((stopAdding = false), false)
    )
    .join("%20")
    .trim();

  const artistString = artist.split(" ").join("%20").trim();

  return `${songString}%20${artistString}`;
}

export default heroSearchParamConstructor;
