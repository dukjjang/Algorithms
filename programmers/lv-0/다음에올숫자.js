function solution(common) {
  let isPlus = common[1] - common[0] === common[2] - common[1];
  let up = common[1] - common[0];

  if (isPlus) return common[common.length - 1] + up;
  else
    return (
      (common[common.length - 1] * common[common.length - 1]) /
      common[common.length - 2]
    );
}
