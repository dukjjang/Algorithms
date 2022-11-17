//문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여
//자연수를 만듭니다. 'tge0a1h205er'에서 숫자만 추출하면 0,1,2,0,5 이고
//이것을 자연수를 만들면 1205가 됩니다.

function solution(str) {
  let answer = str.replace(/[^0-9]/g, "");
  return Number(answer);
}
