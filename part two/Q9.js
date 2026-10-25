// used them to separate the reult to make it readable
console.log(" ");
console.log("Q9");
//----------------------------------------------
const sentence = "the quick brown fox jumps";

const wordCount = sentence.split(" ");
console.log(`Word count: ${wordCount.length}`);

const upperWords = wordCount.map((word) => word.toUpperCase());
for (const wordCount of upperWords) {
  console.log(wordCount);
}

const words5 = wordCount.filter((word) => word.length >= 5);
console.log(`Long words (5+ letters): ${words5.length}`);

const joined = wordCount.join("-");
console.log(`Slug: ${joined}`);

const containsFox = wordCount.some((word) => word === "fox");
console.log(`Contains "fox": ${containsFox}`);

const longestWord = wordCount.reduce((longest, word) =>
  word.length > longest.length ? word : longest,
);
console.log(
  `Longest word: ${longestWord.toUpperCase()} (${longestWord.length} letters)`,
);

const totalLetters = wordCount.reduce((sum, wordCount) => sum + wordCount);
console.log(`Total letters: ${totalLetters.length}`);
