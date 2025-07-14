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
