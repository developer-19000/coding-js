// 1 - two sum (https://leetcode.com/problems/two-sum/)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// more effiient way
var twoSum2 = function (nums, target) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }
    hashMap.set(nums[i], i);
  }

  return [];
};

// 9 - pailindome number (https://leetcode.com/problems/palindrome-number/)
var isPalindrome = function (x) {
  let str = String(x);
  let reverse = str.split("").reverse().join("");
  return str === reverse;
};

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

// 14 - Longest Common Prefix (https://leetcode.com/problems/longest-common-prefix/description/)
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  strs.sort((a, b) => b.length - a.length);
  const shortest = strs.pop();

  let i = 0;
  for (; i <= shortest.length; i++) {
    const prefix = shortest.substring(0, i + 1);
    if (!strs.every((str) => str.startsWith(prefix))) {
      break;
    }
  }
  return shortest.substring(0, i);
};
