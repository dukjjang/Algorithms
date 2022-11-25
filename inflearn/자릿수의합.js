function solution(arr) {
  let answer = 0;
  let idx = 0;

  arr = arr.map((x) => String(x));
  for (let i = 0; i < arr.length; i++) {
    let cur = 0;
    for (let j = 0; j < arr[i].length; j++) {
      cur += Number(arr[i][j]);
    }
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
