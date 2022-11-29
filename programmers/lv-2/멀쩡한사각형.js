function solution(w, h) {
  const gcd = (w, h) => {
    mod = w % h;
    return mod === 0 ? h : gcd(h, mod);
  };
  return w * h - (w + h - gcd(w, h));
}
