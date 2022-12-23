const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// receive input
const a = input[0];
const b = input[1];

function divider(a, b) {
  console.log(a / b);
}

divider(a, b);
