// 14 - Longest Common Prefix (https://leetcode.com/problems/longest-common-prefix/description/)
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  strs.sort((a, b) => b.length - a.length);
  const shortest = strs.pop();

  let i = 0;
  for (; i <= shortest.length; i++) {
    const prefix = shortest.substring(0, i + 1);
    if (!strs.every((str) => str.startsWith(prefix))) {
      break;
    }
  }
  return shortest.substring(0, i);
};
