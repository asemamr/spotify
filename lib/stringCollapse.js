export default function stringCollapse(string, num) {
  if (string.length > num) {
    return `${string.substring(0, num)} ...`;
  }
  return string;
}