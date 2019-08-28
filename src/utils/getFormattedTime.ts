/**
 * Format remaining seconds like `minutes`:`seconds`
 * @param secs {number} - Seconds count to format
 */
const getFormattedTime = (secs: number): string => {
  const minutes = Math.floor((secs % (60 * 60)) / 60);
  const seconds = Math.ceil((secs % (60 * 60)) % 60);

  const min = minutes < 10 ? `0${minutes}` : minutes;
  const sec = seconds < 10 ? `0${seconds}` : seconds;

  return `${min}:${sec}`;
};

export default getFormattedTime;
