function solution(n) {
  let bigNum = n + 1;
  let count1 = n.toString(2).match(/1/g).length;
  while (true) {
    if (count1 === bigNum.toString(2).match(/1/g).length) {
      return bigNum;
    }
    bigNum++;
  }
}
