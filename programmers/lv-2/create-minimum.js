function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < score.length; i = i + m) {
    const min = score[m + i - 1] * m;
    answer += min;
  }
  return answer;
}
