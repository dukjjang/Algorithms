function solution(str, t) {
  let answer = [];
  let p = 100;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== t) {
      p++;
      answer.push(p);
    } else {
      p = 0;
      answer.push(p);
    }
  }
  p = 100;
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] !== t) {
      p++;
      answer[j] = Math.min(answer[j], p);
      console.log(answer);
    } else {
      p = 0;
    }
  }
  return answer;
}
