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
var twoSum2 = function (nums, target) {};


// 9 - pailindome number (https://leetcode.com/problems/palindrome-number/)
var isPalindrome = function (x) {
  let str = String(x);
  let reverse = str.split("").reverse().join("");
  return str === reverse;
};

