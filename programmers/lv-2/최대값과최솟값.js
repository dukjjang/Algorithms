function solution(s) {
  let answer = "";
  let str = s.split(" ").sort((a, b) => a - b);
  answer = `${str[0]} ${str[str.length - 1]}`;
  return answer;
}
