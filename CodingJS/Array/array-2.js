// 179
function findLowestIndex(nums) {
  let minValue = Number.POSITIVE_INFINITY;
  let minIndex = 0;
  nums.forEach((n, i) => {
    if (n < minValue) {
      minValue = n;
      minIndex = i;
    }
  });
  return minIndex;
}

// 180
function countEvens(nums) {
  let count = 0;
  nums.forEach((n) => {
    if (n % 2 === 0) count++;
  });
  return count;
}

// 181
function bigDiff(nums) {
  let largestElement = Math.max(...nums);
  let smallestElement = Math.min(...nums);
  return largestElement - smallestElement;
}

function bigDiff2(nums) {
  let largestElement = Number.NEGATIVE_INFINITY;
  let smallestElement = Number.POSITIVE_INFINITY;

  nums.forEach((n) => {
    if (n > largestElement) largestElement = n;
    if (n < smallestElement) smallestElement = n;
  });

  return largestElement - smallestElement;
}

// 182
function centeredAverage(nums) {
  let sortedArr = nums.sort((a, b) => a - b);
  sortedArr.splice(0, 1);
  sortedArr.splice(sortedArr.length - 1, 1);

  let sum = sortedArr.reduce((acc, next) => {
    return acc + next;
  }, 0);

  return sum / sortedArr.length;
}

function centeredAverage2(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let skippedMin = false;
  let skippedMax = false;
  let arr = [];

  for (let num of nums) {
    if (num === min && !skippedMin) {
      skippedMin = true;
      continue;
    }
    if (num === max && !skippedMax) {
      skippedMax = true;
      continue;
    }
    arr.push(num);
  }

  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

// 183
function sum13(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 13) {
      i++;
      continue;
    }
    sum += nums[i];
  }
  return sum;
}

// 184
function sum67(nums) {
  let found6 = false;
  let sum = 0;

  for (let n of nums) {
    if (n === 7 && found6) {
      found6 = false;
      continue;
    }
    if (found6) {
      continue;
    }

    if (n === 6) {
      found6 = true;
      continue;
    }

    sum += n;
  }
  return sum;
}

// 185
function has22(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2 && nums[i + 1] === 2) {
      return true;
    }
  }
  return false;
}

// 186
function lucky13(nums) {
  for (let n of nums) {
    if (n === 1 || n === 3) {
      return false;
    }
  }
  return true;
}

// 187
function sum28(nums) {
  let sum = 0;
  for (let n of nums) {
    if (n === 2) {
      sum += n;
    }
  }
  if (sum === 8) {
    return true;
  } else {
    return false;
  }
}

// 188
function more14(nums) {
  let oneCount = 0;
  let fourCount = 0;

  for (let n of nums) {
    if (n === 1) oneCount++;
    if (n === 4) fourCount++;
  }

  return oneCount > fourCount;
}

// 189
function prependSum(nums) {
  let sumOfFirstTwo = nums[0] + nums[1];
  return [sumOfFirstTwo, ...nums.slice(2)];
}

// 190
function fizzArray(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}

// 191
function only14(nums) {
  for (let n of nums) {
    if (n !== 1 && n !== 4) return false;
  }
  return true;
}

// 192
function fizzArray2(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(String(i));
  }
  return result;
}

// 193
function no14(nums) {
  return noNumber(nums, 1) || noNumber(nums, 4);
}

function noNumber(arr, number) {
  for (let n of arr) {
    if (n === number) return false;
  }
  return true;
}

// 194
function isEverywhere(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== val && nums[i + 1] !== val) return false;
  }
  return true;
}

// 195
function either24(nums) {
  let twotwo = false;
  let fourfour = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 2 && nums[i + 1] === 2) twotwo = true;
    if (nums[i] === 4 && nums[i + 1] === 4) fourfour = true;
  }

  return twotwo !== fourfour;
  // the code above can be written like : (twotwo && !fourfour) || (!twotwo && fourfour);
  // the code is shorter and cleaner but the other one is more explicit
}

// 196 => another question with problems in displaying correct test results
function matchUp(nums1, nums2) {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    const diff = Math.abs(nums1[i] - nums2[i]);
    if (diff <= 2 && diff !== 0) {
      count++;
    }
  }
  return count;
}

// 197
function has77(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 7 && nums[i + 1] === 7) {
      return true;
    } else if (nums[i] === 7 && nums[i + 2] === 7) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

// 198
function has12(nums) {
  let indexOfOne = nums.indexOf(1);
  if (indexOfOne === -1) {
    return false;
  }
  for (let i = indexOfOne; i < nums.length; i++) {
    if (nums[i] === 2) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

// 199
function modThree(nums) {
  if (nums.length < 3) return false;
  for (let i = 0; i < nums.length - 2; i++) {
    let first = isEven(nums[i]);
    let second = isEven(nums[i + 1]);
    let third = isEven(nums[i + 2]);

    if (first && second && third) return true;
    if (!first && !second && !third) return true;
  }
  return false;
}

function isEven(n) {
  return n % 2 === 0;
}

// 200 => another question with problems in displaying correct test results
function findTheMedian(nums) {
  let sortedArray = nums.sort((a, b) => a - b);
  let length = sortedArray.length;

  if (length % 2 !== 0) {
    let middleValue = sortedArray[Math.floor(length / 2)];
    return middleValue;
  } else {
    let middleUp = sortedArray[Math.ceil(length / 2)];
    let middleDown = sortedArray[Math.floor(length / 2)];
    return (middleUp + middleDown) / 2;
  }
}

// 201
function haveThree(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) {
      if (nums[i + 1] === 3) {
        return false;
      } else {
        count++;
      }
    }
  }
  return count === 3;
}

// 202
function twoTwo(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2) {
      if (nums[i - 1] !== 2 && nums[i + 1] !== 2) {
        return false;
      }
    }
  }
  return true;
}

// 203
function tripleUp(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    let currentNumber = nums[i];
    let firstNextNumber = nums[i + 1];
    let secondNextNumber = nums[i + 2];

    if (
      firstNextNumber === currentNumber + 1 &&
      secondNextNumber === firstNextNumber + 1
    ) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

// 204
function fizzArray3(start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

// 205 => 4th test doesn't pass even though the result is correct
function c(nums) {
  return [...nums.slice(1), nums[0]];
}

// 206
function tenRun(nums) {
  let result = [];
  let multiply = false;
  let lastMultiple;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 10 === 0) {
      lastMultiple = nums[i];
      multiply = true;
    }

    if (multiply) {
      result.push(lastMultiple);
    } else {
      result.push(nums[i]);
    }
  }
  return result;
}

// 207
function pre4(nums) {
  let result = [];
  for (let n of nums) {
    if (n === 4) {
      return result;
    }
    result.push(n);
  }
  return result;
}

// 208
function post4(nums) {
  let result = [];
  let lastFourIndex = nums.lastIndexOf(4);
  if (lastFourIndex === -1) return result;
  for (let i = lastFourIndex + 1; i < nums.length; i++) {
    result.push(nums[i]);
  }
  return result;
}

// 209
function notAlone(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === val) {
      let left = nums[i - 1];
      let right = nums[i + 1];

      if (left !== undefined && right !== undefined) {
        if (left !== val && right !== val) {
          let bigger = left > right ? left : right;
          nums.splice(i, 1, bigger);
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
  }
  return nums;
}

function notAlone2(nums, val) {
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] !== val) continue;

    let left = nums[i - 1];
    let right = nums[i + 1];

    if (left === val || right === val) continue;

    let bigger = left > right ? left : right;
    nums[i] = bigger;
  }
  return nums;
}

