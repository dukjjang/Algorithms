const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
// receive input
arr
  .map((v) => v.split(" ").map((x) => +x))
  .forEach((y) => {
    bridge(y[0], y[1]);
  });

function bridge(k, n) {
  let dp = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

  dp[0][0] = 1;
  dp[1][0] = 1;
  dp[1][1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        dp[i][j] = 1;
      } else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  console.log(dp[n][k]);
}
