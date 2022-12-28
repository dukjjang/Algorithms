function solution(s) {
  const result = s
    .split(' ')
    .map(
      (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    );
  return result.join(' ');
}
