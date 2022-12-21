const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = input.split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

function solution(num1, num2) {
  console.log(num1 - num2);
}
solution(a, b);
