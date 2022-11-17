// 입력된 문자열이 팰린드롬이면 'YES', 아니면 "NO"를 출력하시오.

//입력 예제
//'found7, time: study; Yduts; emit, 7Dnuof'

function solution(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  const reverse = str.split("").reverse().join("");
  if (str === reverse) return "YES";
  else return "NO";
}
