// 13 -  Roman to Integer (https://leetcode.com/problems/roman-to-integer/description/)
var romanToInt = function (s) {
  let result = 0;
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let currentValue = map[s[i]];
    let nextValue = map[s[i + 1]];
    if (currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }
  return result;
};

