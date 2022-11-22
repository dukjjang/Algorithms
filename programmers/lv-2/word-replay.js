function solution(n, words) {
  let prevWords = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (
      prevWords[i - 1][prevWords[i - 1].length - 1] === words[i][0] &&
      !prevWords.includes(words[i])
    ) {
      prevWords.push(words[i]);
    } else {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }
  return [0, 0];
}
