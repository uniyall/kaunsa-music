function convertToDurationString(durationMs) {
  const totalSec = Math.floor(durationMs / 1000);
  let mins = Math.floor(totalSec / 60);
  let seconds = totalSec % 60;
  let duration = `${mins} min ${seconds} sec`;
  return duration;
}

export default convertToDurationString;
