// 1 - Two Sum (https://leetcode.com/problems/two-sum/)
// Returns indices of two numbers that add up to the target.

// Time complexity: O(n^2), Space complexity: O(1)
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

// More efficient solution using a hashmap
// This solution is more efficient because it finds the pair in a single pass through the array (loops only once)
// Time complexity: O(n), Space complexity: O(n)
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

