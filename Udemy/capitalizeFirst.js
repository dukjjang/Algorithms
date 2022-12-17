const capitalizeFirst = (arr) => {
  let result = [];
  const machine = (arr) => {
    if (arr.length === 0) return;
    let firstLetter = arr[0][0].toUpperCase();
    let restLetters = arr[0].substring(1);
    result.push(`${firstLetter}${restLetters}`);
    machine(arr.slice(1));
  };
  machine(arr);
  return result;
};

console.log(
  'capitalizeFirst',
  capitalizeFirst(['apple', 'watch', 'movie', 'take a walk'])
); // ["Apple", "Watch", "Movie", "Take a walk"]
