const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let cnt = input[0];
let inputList = input.slice(1);

const countFibonacci = (
  n,
  obj = {
    zeroCount: [1, 0],
    oneCount: [0, 1],
  }
) => {
  if (obj.zeroCount.length > n) return obj;

  for (let i = 2; i < n + 1; i++) {
    obj.zeroCount.push(obj.zeroCount[i - 1] + obj.zeroCount[i - 2]);
    obj.oneCount.push(obj.oneCount[i - 1] + obj.oneCount[i - 2]);
  }

  const zero = obj.zeroCount[n];
  const one = obj.oneCount[n];

  return [zero, one];
};

// console.log(countFibonacci(4));

// for (x of inputList) {
//   console.log(countFibonacci(x));
// }

const fib = (
  n,
  memo = [
    [1, 0],
    [0, 1],
  ]
) => {
  if (n === 1) return memo[1];
  if (n === 0) return memo[0];
  if (memo[n] !== undefined) return memo[n];

  let arr1 = fib(n - 1, memo);
  let arr2 = fib(n - 2, memo);

  let zeroCount = arr1[0] + arr2[0];
  let oneCount = arr1[1] + arr2[1];

  memo[n] = [zeroCount, oneCount];

  return memo[n];
};

for (x of inputList) {
  let res = fib(x);
  console.log(`${res[0]} ${res[1]}`);
}

// console.log(fib(4));
