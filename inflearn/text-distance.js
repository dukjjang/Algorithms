// 문제 : 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가
//문자 t와 떨어진 최소거리를 출력하시오

//풀이:
// 1. 입력으로 들어오는 최대값정도의 큰 값을 변수 p로 설정
// 2. 만약 t가 아니면 p++ 하고 answer 배열에 푸쉬
// 3. 만약 t라면 p = 0; 하고 answer에 0을 푸쉬
// 그러면 왼쪽에 있는 t로부터의 거리가 배열에 남게된다.
// 4. 그런다음 이제는 배열의 마지막부터 거꾸로 돌면서
// t로 부터 떨어진 거리를 answer에 넣는데
// 그전 answer와 비교하여 더 작은수를 넣는다.
// answer를 리턴

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
