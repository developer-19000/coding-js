// 31
function stringTimes(str, n) {
  return str.repeat(n);
}

// 32
function frontTimes(str, n) {
  if (str.length <= 3) {
    return str.repeat(n);
  } else {
    return str.slice(0, 3).repeat(n);
  }
}

// 33
function countXX(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" && str[i + 1] === "x") {
      count++;
    }
  }
  return count;
}

// 34
function doubleX(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      return str[i + 1] === "x" ? true : false;
    }
  }
  return false;
}

// 35
function stringBits(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 2) {
    result += str[i];
  }
  return result;
}

// 36
function stringSplosion(str) {
  let result = "";
  let stopIndex = str.length - 1;

  for (let i = 0; i <= stopIndex; i++) {
    result += str.substring(0, i + 1);
  }

  return result;
}

// 37
function last2(str) {
  let count = 0;
  let search = str.slice(-2);
  let sliced = str.slice(0, str.length - 2);
  console.log(search[0]);

  for (let i = 0; i < sliced.length; i++) {
    if (str[i] === search[0] && str[i + 1] === search[1]) {
      count++;
    }
  }
  return count;
}

// 38
function arrayCount9(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 9) count++;
  }
  return count;
}

// 39
function arrayFront9(nums) {
  for (let i = 0; i < 4; i++) {
    if (nums[i] === 9) return true;
  }
  return false;
}

// 40
function array123(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) {
      return true;
    }
  }
  return false;
}

// 41
function stringMatch(a, b) {
  let count = 0;
  const minLength = Math.min(a.length, b.length);

  for (let i = 0; i < minLength - 1; i++) {
    if (a.slice(i, i + 2) === b.slice(i, i + 2)) {
      count++;
    }
  }

  return count;
}

// 42
function stringX(str) {
  if (str.length === 0) return "";
  let result = str[0];
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] !== "x") result += str[i];
  }
  result += str[str.length - 1];
  return result;
}

// 43
function altPairs(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 4) {
    result += str[i];
    result += str[i + 1] || "";
  }
  return result;
}

// 44
function stringYak(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "y" && str[i + 2] === "k") {
      i += 2;
      continue;
    }
    result += str[i];
  }
  return result;
}

// 45
function array667(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 6 && (nums[i + 1] === 6 || nums[i + 1] === 7)) {
      count++;
    }
  }
  return count;
}

// 46
function noTriples(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      return false;
    }
  }
  return true;
}

// 47
function has271(nums) {
  let str = nums.join("");
  return str.includes("271");
}
