function findLongestWord(string = "") {
  const stringSplit = string.split(" ");
  let longestWord = "";

  for (const word of stringSplit) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
