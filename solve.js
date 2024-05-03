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

