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
