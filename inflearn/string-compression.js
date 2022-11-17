function solution(str) {
  let count = 1;
  let t = "";
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      answer.push(str[i]);
      break;
    }
    if (str[i] !== str[i + 1]) {
      if (count === 1) answer.push(str[i]);
      else {
        answer.push(`${t}${count}`);
        count = 1;
        t = "";
      }
    } else {
      t = str[i];
      count++;
    }
  }
  return answer.join("");
}
