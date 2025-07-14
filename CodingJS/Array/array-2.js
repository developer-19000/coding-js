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
