function solution(s) {
  let open = 0;
  let close = 0;
  if (s[0] === ')') {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') open += 1;
    if (s[i] === ')') close += 1;
    if (close > open) {
      return false;
    }
  }
  if (open === close) return true;
  return false;
}
