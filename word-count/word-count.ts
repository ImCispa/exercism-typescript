export function count(w : string) {
  let words = w.trim().split(" ");
  let wordCount: { [key: string]: number } = {};
  words.forEach(word => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });
  return wordCount;
}
