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

module.exports = binarySearch;
