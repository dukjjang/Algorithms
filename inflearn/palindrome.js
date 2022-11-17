// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES",
// 아니면 "NO"를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

function solution(word) {
  let reverseWord = word.split("").reverse().join("");

  if (reverseWord.toLowerCase() === word.toLowerCase()) return "YES";
  else return "NO";
}
