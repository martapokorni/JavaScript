function findLongestWord(array) {
  var longestWord = "";

  array.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

var word = findLongestWord([
  "The",
  "quick",
  "brown",
  "foooooooox",
  "jumped",
  "over",
  "the",
  "lazy",
  "dog",
]);
console.log(word); // result is "jumped"
