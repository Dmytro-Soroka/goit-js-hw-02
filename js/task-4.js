function formatString(string, maxLength = 40) {
  // Write code under this line
  return string.length < maxLength
    ? string
    : string.slice(0, maxLength) + "...";
}
