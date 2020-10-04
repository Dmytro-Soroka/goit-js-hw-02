function checkForSpam(str) {
  "use strict";
  // Write code under this line
  const findWord =
    str.toLowerCase().includes("sale") || str.toLowerCase().includes("spam");

  return findWord;
}
