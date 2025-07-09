// 153
function firstLast6(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}

// 154
function sameFirstLast(nums) {
  return nums[0] === nums[nums.length - 1] && nums.length >= 1;
}
