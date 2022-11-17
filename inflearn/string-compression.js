// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로
// 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를
// 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
// 단 반복횟수가 1인 경우 생략합니다.
//
// 풀이:
// 1. str을 돌면서, 다음문자하고 같으면
// t에 현재 문자를 넣고, count++
// 2. 만약 다음 문자하고 다르면
// 2-1 count가 1이면 그냥 answer에 현재 문자를 푸쉬
// 2-2 count가 1이 아니면 answer에 t와 count를 함께 푸쉬
// 3. 만약 마지막 문자라면 (i === str.length-1)
// 3-1 count가 1이면 그냥 answer에 현재 문자를 푸쉬하고 break
// 3-2 count가 1이 아니면 answer에 t와 count를 푸쉬

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
