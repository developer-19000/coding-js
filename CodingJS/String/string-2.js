// 79
function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }
  return result;
}

// 80
function countHi(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "h" && str[i + 1] === "i") {
      count++;
    }
  }
  return count;
}

// 81
function countSubStringTimes(str, search) {
  let count = 0;
  let len = str.length;
  let searchLen = search.length;

  for (let i = 0; i < len; i++) {
    if (str.slice(i, i + searchLen) === search) count++;
  }
  return count;
}

//82
function catDog(str) {
  let catCounts = countSubStringTimes(str, "cat");
  let dogCounts = countSubStringTimes(str, "dog");
  return catCounts === dogCounts;
}

// 83
function countCode(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "c" && str[i + 1] === "o" && str[i + 3] === "e") count++;
  }
  return count;
}

// 84
function endOther(a, b) {
  let lowerCaseA = a.toLowerCase();
  let lowerCaseB = b.toLowerCase();
  return lowerCaseA.endsWith(lowerCaseB) || lowerCaseB.endsWith(lowerCaseA);
}

// 85
function xyzThere(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "x" &&
      str[i + 1] === "y" &&
      str[i + 2] === "z" &&
      str[i - 1] !== "."
    )
      return true;
  }
  return false;
}

// 86
function bobThere(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "b" && str[i + 2] === "b") return true;
  }
  return false;
}

// 87
function xyBalance(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      if (!str.slice(i).includes("y")) {
        return false;
      }
    }
  }
  return true;
}

// 88
function mixString(a, b) {
  let result = "";
  let longer = a.length > b.length ? a : b;
  let shoter = a.length > b.length ? b : a;

  for (let i = 0; i < longer.length; i++) {
    if (a[i]) result += a[i];
    if (b[i]) result += b[i];
  }
  return result;
}

// 89
function repeatEnd(str, n) {
  return str.slice(-1 * n).repeat(n);
}

// 90
function repeatFront(str, n) {
  let result = "";
  for (let i = n; i > 0; i--) {
    result += str.slice(0, i);
  }
  return result;
}

// 91
function repeatSeparator(word, sep, count) {
  if (count === 1) return word;
  let result = word + sep;
  return result.repeat(count).slice(0, -1 * sep.length);
}

// 92
function prefixAgain(str, n) {
  let pref = str.slice(0, n);
  return str.slice(n).includes(pref);
}

// 93 => a nice challenging question
function xyzMiddle(str) {
  for (let i = 0; i < str.length - 2; i++) {
    if (str.slice(i, i + 3) === "xyz") {
      const [left, right] = splitString(str, i);
      if (differByAtMostOne(left.length, right.length)) {
        return true;
      }
    }
  }
  return false;
}

function splitString(str, index) {
  return [str.slice(0, index), str.slice(index + 3)];
}

function differByAtMostOne(num1, num2) {
  return Math.abs(num1 - num2) <= 1;
}

// 94
function getSandwich(str) {
  let firstIndex = str.indexOf("bread");
  let lastIndex = str.lastIndexOf("bread");
  if (firstIndex !== lastIndex) return str.slice(firstIndex + 5, lastIndex);
  return "";
}

// 95
function sameStarChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*" && i !== 0 && i !== str.length) {
      if (str[i - 1] !== str[i + 1]) return false;
    }
  }
  return true;
}

// 97
function oneTwo(str) {
  let result = "";
  for (let i = 0; i < str.length - 2; i += 3) {
    result += str[i + 1] + str[i + 2] + str[i];
  }
  return result;
}

// 98
function zipZap(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "z" && str[i + 2] === "p") {
      result += "zp";
      i += 2;
    } else {
      result += str[i];
    }
  }
  return result;
}

// 99
function starOut(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] !== "*" && str[i + 1] !== "*" && str[i] !== "*") {
      result += str[i];
    }
  }
  return result;
}

// 100
function plusOut(str, word) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + word.length) === word) {
      result += word;
      i += word.length - 1;
    } else {
      result += "+";
    }
  }
  return result;
}

// 101
function wordEnds(str, word) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + word.length) === word) {
      if (str[i - 1]) result += str[i - 1];
      if (str[i + word.length]) result += str[i + word.length];
    }
  }
  return result;
}

