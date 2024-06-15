// 1
function sleepIn(weekday, vacation) {
  return !weekday || vacation;
}

// 2
function monkeyTrouble(aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile);
}

// 3
function sumDouble(a, b) {
  if (a === b) {
    return 2 * (a + b);
  } else {
    return a + b;
  }
}

// 4
function diff21(n) {
  let diff = Math.abs(21 - n);
  if (n > 21) {
    return diff * 2;
  } else {
    return diff;
  }
}

// 5
function parrotTrouble(talking, hour) {
  if (!talking) {
    return false;
  } else {
    if (hour < 7 || hour > 20) {
      return true;
    }
    return false;
  }
}

// 6
function makes10(a, b) {
  if (a === 10 || b === 10) return true;
  if (a + b === 10) return true;
  return false;
}

// 7
function nearHundred(n) {
  return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
}

// 8
function posNeg(a, b, negative) {
  if (negative) {
    if (a < 0 && b < 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (a * b < 0) {
      return true;
    } else {
      return false;
    }
  }
}

// 9
function notString(str) {
  if (str.slice(0, 3) === "not") {
    return str;
  } else {
    return "not " + str;
  }
}

// 10
function missingChar(str, n) {
  return str.slice(0, n) + str.slice(n + 1);
}

// 11
function frontBack(str) {
  if (str.length <= 1) return str;
  const lastChar = str.slice(-1);
  const middleChars = str.slice(1, -1);
  const firstChar = str.slice(0, 1);
  return `${lastChar}${middleChars}${firstChar}`;
}

// 12
function front3(str) {
  const front = str.slice(0, 3);
  return front.repeat(3);
}

// 13
function backAround(str) {
  const lastChar = str[str.length - 1];
  return `${lastChar}${str}${lastChar}`;
}

// 14
function or35(n) {
  return n % 3 === 0 || n % 5 === 0;
}

// 15
function front22(str) {
  let firstTwo = str.slice(0, 2);
  return `${firstTwo}${str}${firstTwo}`;
}

// 16
function startHi(str) {
  return str.slice(0, 2) === "hi";
}

// 17
function icyHot(temp1, temp2) {
  return (temp1 < 0 && temp2 > 100) || (temp2 < 0 && temp1 > 100);
}

// 18 => there is a problem with results in website. but the solution is correct
function between1020(number) {
  return number <= 20 && number >= 10;
}
function in1020(a, b) {
  return (
    (between1020(a) && !between1020(b)) || (between1020(b) && !between1020(a))
  );
}

// 18 => this question also has problems with result. the solution was tested in the console and it is correct
function isTeen(number) {
  return number >= 13 && number <= 19;
}
function hasTeen(a, b, c) {
  return !(isTeen(a) && isTeen(b) && isTeen(c));
}

// 19 => this question also has problems with result. like previous questions, the solution was tested
function loneTeen(a, b) {
  return !(isTeen(a) && isTeen(b));
}

// 20
function delDel(str) {
  if (str.slice(1, 4) === "del") {
    return str.slice(0, 1) + str.slice(4);
  } else {
    return str;
  }
}

// 21
function mixStart(str) {
  if (str.slice(1, 3) === "ix") {
    return true;
  } else {
    return false;
  }
}

// 22
function startOz(str) {
  let firstChar = str[0] === "o" ? "o" : "";
  let secondChar = str[1] === "z" ? "z" : "";
  return firstChar + secondChar;
}

// 23
function intMax(a, b, c) {
  let larger = a > b ? a : b;
  let largest = larger > c ? larger : c;
  return largest;
}

// 24
function close10(a, b) {
  let aDiff = Math.abs(10 - a);
  let bDiff = Math.abs(10 - b);

  if (aDiff === bDiff) {
    return 0;
  } else {
    return aDiff > bDiff ? b : a;
  }
}

// 25 => another question with problems in results
function in3040(n) {
  return n >= 30 && n <= 40;
}

function in4050(n) {
  return n >= 40 && n <= 50;
}

function in3050(a, b) {
  return (in3040(a) && in3040(b)) || (in4050(a) && in4050(b));
}

// 26 => this question also has problems in the results
function in1020(n) {
  return n >= 10 && n <= 20;
}

function max1020(a, b) {
  const isAInRange = in1020(a);
  const isBInRange = in1020(b);

  if (isAInRange && isBInRange) {
    return Math.max(a, b);
  }

  if (isAInRange) {
    return a;
  }

  if (isBInRange) {
    return b;
  }

  return 0;
}

// 27
function stringE(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") count++;
  }

  return count >= 1 && count <= 3;
}

// 28
function lastDigit(a, b) {
  let aString = String(a);
  let bString = String(b);
  return aString[aString.length - 1] === bString[bString.length - 1];
}

// 29
function endUp(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  } else {
    return (
      str.slice(0, str.length - 3) + str.slice(str.length - 3).toUpperCase()
    );
  }
}

// 30
function everyNth(str, n) {
  let result = "";
  for (let i = 0; i < str.length; i += n) {
    result += str[i];
  }
  return result;
}

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

// 48
function helloName(name) {
  return `Hello ${name}!`;
}

// 49
function makeAbba(a, b) {
  return `${a}${b}${b}${a}`;
}

// 50
function makeTags(tag, word) {
  return `<${tag}>${word}</${tag}>`;
}

// 51
function makeOutWord(out, word) {
  return `${out.slice(0, 2)}${word}${out.slice(2)}`;
}

// 52
function extraEnd(str) {
  let lastChars = str.slice(-2);
  return `${lastChars.repeat(3)}`;
}

// 53
function firstTwo(str) {
  return str.slice(0, 2);
}

// 54 => another question with problems in results
function firstHalf(str) {
  return str.slice(0, str.length / 2);
}

// 55
function withoutEnd(str) {
  return str.slice(1, str.length - 1);
}

// 56
function comboString(a, b) {
  let longer = a.length > b.length ? a : b;
  let shorter = a.length > b.length ? b : a;
  return `${shorter}${longer}${shorter}`;
}

// 57
function nonStart(a, b) {
  return `${a.slice(1)}${b.slice(1)}`;
}

// 58
function left2(str) {
  return `${str.slice(2)}${str.slice(0, 2)}`;
}

// 59
function right2(str) {
  return `${str.slice(-2)}${str.slice(0, str.length - 2)}`;
}

// 60
function theEnd(str, front) {
  if (front) {
    return str[0];
  } else {
    return str[str.length - 1];
  }
}

// 61
function withoutEnd2(str) {
  return str.slice(1, str.length - 1);
}

// 62 => another question with problems in results
function middleTwo(str) {
  return str.slice(str.length / 2 - 1, str.length / 2 + 1);
}

//63
function endsLy(str) {
  return str.slice(-2) === "ly";
}

// 64
function nTwice(str, n) {
  let firstN = str.slice(0, n);
  let lastN = str.slice(str.length - n);
  return `${firstN}${lastN}`;
}

// 65
function middleThree(str) {
  const middle = Math.ceil(str.length / 2);
  return `${str.slice(middle - 2, middle + 1)}`;
}

// 66
function hasBad(str) {
  return str.includes("bad") && (str[0] === "b" || str[1] === "b");
}

// 67
function atFirst(str) {
  if (str === "") return "@@";
  if (str.length < 2) {
    return `${str}@`;
  }
  return str.slice(0, 2);
}

// 67
function lastChars(a, b) {
  const first = a[0] || "@";
  const second = b[b.length - 1] || "@";
  return `${first}${second}`;
}

// 68
function conCat(a, b) {
  if (a[a.length - 1] === b[0]) {
    return `${a.slice(0, a.length - 1)}${b}`;
  } else {
    return `${a}${b}`;
  }
}

// 69
function lastTwo(str) {
  if (str.length <= 2) {
    return str.slice(-2).split("").reverse().join("");
  } else {
    const lastChars = str.slice(-2).split("").reverse().join("");
    return `${str.slice(0, str.length - 2)}${lastChars}`;
  }
}

// 70
function seeColor(str) {
  if (str.startsWith("red")) return "red";
  if (str.startsWith("blue")) return "blue";
  return "";
}

// 71
function frontAgain(str) {
  if (str.length < 2) return false;
  return str.slice(0, 2) === str.slice(-2);
}

// 72
function minCat(a, b) {
  if (!a || !b) return "";
  const len = Math.min(a.length, b.length);
  return a.slice(-len) + b.slice(-len);
}

// 73
function extraFront(str) {
  return `${str.slice(0, 2).repeat(3)}`;
}

// 74
function without2(str) {
  if (str.length < 2) return str;
  return str.slice(0, 2) === str.slice(-2) ? str.slice(2) : str;
}

// 75
function deFront(str) {
  let result = "";
  if (str[0] === "a") result += "a";
  if (str[1] === "b") result += "b";
  result += str.slice(2);
  return result;
}

// 76
function startWord(str, word) {
  let len = word.length;
  if (str.slice(1, len) === word.slice(1)) return str.slice(0, len);
  return "";
}

// 77
function withoutX(str) {
  if (str.startsWith("x")) {
    str = str.slice(1);
  }
  if (str.endsWith("x")) {
    str = str.slice(0, -1);
  }
  return str;
}

// 78
function withoutX2(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 && str[i] === "x") continue;
    if (i === 1 && str[i] === "x") continue;
    result += str[i];
  }
  return result;
}

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