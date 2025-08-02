// 215
function maxSpan(nums) {
  if (nums.length === 1) return 1;
  let largestSpan = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentSpan = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        currentSpan = j - i + 1;
      }
      if (currentSpan > largestSpan) {
        largestSpan = currentSpan;
      }
    }
  }
  return largestSpan;
}

function maxSpan2(nums) {
  let largestSpan = 0;
  for (let n of nums) {
    let firstIndex = nums.indexOf(n);
    let lastIndex = nums.lastIndexOf(n);
    let span = lastIndex - firstIndex + 1;
    if (span > largestSpan) largestSpan = span;
  }
  return largestSpan;
}

// note : uing map results in wrong test results on the website. but the solution is correct
function maxSpanMap(nums) {
  let span = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let obj = map.get(nums[i]);
      obj.lastAppearance = i;
    } else {
      map.set(nums[i], { firstAppearance: i, lastAppearance: i });
    }
  }

  for (let [key, obj] of map) {
    let currentSpan = obj.lastAppearance - obj.firstAppearance + 1;
    if (currentSpan > span) span = currentSpan;
  }

  return span;
}

// 216
function fix34(nums) {
  let freeFours = [];
  let threesThatNeedFour = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 4 && nums[i - 1] !== 3) {
      freeFours.push(i);
    }

    if (nums[i] === 3 && nums[i + 1] !== 4) {
      threesThatNeedFour.push(i);
    }
  }

  for (let i = 0; i < freeFours.length; i++) {
    let temp = nums[threesThatNeedFour[i] + 1];
    nums[threesThatNeedFour[i] + 1] = 4;
    nums[freeFours[i]] = temp;
  }

  return nums;
}

console.log(fix34([1, 3, 1, 4, 4, 3, 1]));
