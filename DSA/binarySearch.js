function binarySearch(arr, target) {
  let sortedArray = arr.sort((a, b) => a - b);
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    let middleValue = Math.floor((startIndex + endIndex) / 2);
    let number = sortedArray[middleValue];

    if (number === target) return middleValue;
    if (number > target) endIndex = middleValue - 1;
    else startIndex = middleValue + 1;
  }

  return false;
}

// console.log(binarySearch([1, 3, 5, 7, 9], 7)); // should return 3
// console.log(binarySearch([10, 20, 30, 40, 50], 30)); // should return 2
// console.log(binarySearch([2, 4, 6, 8, 10], 1)); // should return false
// console.log(binarySearch([100], 100)); // should return 0
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // should return 4
// console.log(binarySearch([5, 3, 1, 2, 4], 3)); // should return 2 (after sorting)

module.exports = binarySearch;
