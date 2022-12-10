function solution(a, b, n) {
  let target = n;
  let answer = 0;

  for (let i = 0; a <= target; i++) {
    const rest = Math.floor(target % a);
    const divide = Math.floor(target / a) * b;
    answer += divide;
    target = rest + divide;
  }
  return answer;
}
