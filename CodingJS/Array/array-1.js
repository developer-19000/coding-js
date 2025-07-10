// 153
function firstLast6(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}

// 154
function sameFirstLast(nums) {
  return nums[0] === nums[nums.length - 1] && nums.length >= 1;
}

// 155
function makePi() {
  return [3, 1, 4];
}

// 156
function commonEnd(a, b) {
  return a[0] === b[0] || a[a.length - 1] === b[b.length - 1];
}

// 157
function sum3(nums) {
  return nums.reduce((a, b) => {
    return a + b;
  }, 0);
}

// 158
function rotateLeft3(nums) {
  let firstElement = nums.shift();
  return [...nums, firstElement];
}

function rotateLeft3_2(nums) {
  let firstElement = nums[0];
  let slicedArray = nums.slice(1);
  return [...slicedArray, firstElement];
}

// 159
function reverse3(nums) {
  let result = [];
  nums.forEach((n) => {
    result.unshift(n);
  });
  return result;
}

// 160
function maxEnd3(nums) {
  let largerElement =
    nums[0] > nums[nums.length - 1] ? nums[0] : nums[nums.length - 1];
  return nums.map((n) => {
    return largerElement;
  });
}
