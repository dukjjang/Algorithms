// 방법1
const isAnagram = (str1, str2) => {
  let hash = {};
  let result = 0;

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    hash[str1[i]] = hash[str1[i]] ?? 0;
    hash[str1[i]] += 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (hash[str2[i]]) hash[str2[i]]--;
  }

  for (letter in hash) {
    result += hash[letter];
  }
  return result === 0;
};

console.log(isAnagram("eppla", "apple"));

// 방법 2

const isAnagram2 = (str1, str2) => {
  return str1.split("").sort().join() === str2.split("").sort().join();
};

console.log(isAnagram2("apple", "leapp"));
