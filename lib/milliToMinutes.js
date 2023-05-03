function milliToMinutes(duration) {
  const minutes = duration / 1000 / 60
  const seconds = duration / 1000 % 60
  return `${Math.trunc(minutes)}:${Math.trunc(seconds)}`;
}

export default milliToMinutes;

export function secondsToMinutes(duration) {
  const minutes = duration / 60;
  const seconds = duration % 60;
  return `${Math.trunc(minutes)}:${Math.trunc(seconds) > 9 ? Math.trunc(seconds) : `0${Math.trunc(seconds)}`}`;
}