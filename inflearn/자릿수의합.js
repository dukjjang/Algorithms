function solution(arr) {
  let answer = 0;
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i]
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0);
    if (cur > answer) {
      answer = cur;
      idx = i;
    } else if (cur === answer) {
      if (arr[i] > arr[idx]) {
        idx = i;
        answer = cur;
      }
    }
  }
  return arr[idx];
}
