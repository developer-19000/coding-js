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
