const binarySearch = require("./binarySearch");

test("finds 7 in the array", () => {
  expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
});

test("finds 30 in the array", () => {
  expect(binarySearch([10, 20, 30, 40, 50], 30)).toBe(2);
});

test("returns false if there is no match", () => {
  expect(binarySearch([2, 4, 6, 8, 10], 1)).toBe(false);
});

test("works with an array with a single element", () => {
  expect(binarySearch([100], 100)).toBe(0);
});

test("works with unsorted arrays", () => {
  expect(binarySearch([5, 3, 1, 2, 4], 3)).toBe(2);
});
