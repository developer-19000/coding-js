// 9 - pailindome number (https://leetcode.com/problems/palindrome-number/)
var isPalindrome = function (x) {
  let str = String(x);
  let reverse = str.split("").reverse().join("");
  return str === reverse;
};

