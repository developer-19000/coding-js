// 113
function cigarParty(cigars, isWeekend) {
  if (isWeekend) {
    return cigars >= 40;
  } else {
    return cigars >= 40 && cigars <= 60;
  }
}

// 114
function dateFashion(you, date) {
  if (you <= 2 || date <= 2) return 0;
  if (you >= 8 || date >= 8) return 2;
  return 1;
}

// 115
function squirrelPlay(temp, isSummer) {
  if (isSummer) {
    return temp <= 100 && temp >= 60;
  } else {
    return temp <= 90 && temp >= 60;
  }
}

// 116
function caughtSpeeding(speed, isBirthday) {
  if (isBirthday) {
    if (speed <= 65) return 0;
    if (speed >= 66 && speed <= 85) return 1;
    if (speed >= 86) return 2;
  } else {
    if (speed <= 60) return 0;
    if (speed >= 61 && speed <= 80) return 1;
    if (speed >= 81) return 2;
  }
}

// 117
function sortaSum(a, b) {
  if (a + b >= 10 && a + b <= 19) return 20;
  return a + b;
}

// 118 => another question with issues in displaying answers in the website
function isWeekend(day) {
  return day === "Fri" || day === "Sat";
}
function alarmClock(day, vacation) {
  let daysOfTheWeek = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };

  if (!isWeekend(daysOfTheWeek[day])) {
    if (!vacation) return "7:00";
    return "10:00";
  } else {
    if (vacation) return "off";
    return "10:00";
  }
}

// 119
function love6(a, b) {
  if (a === 6 || b === 6) return true;
  if (a + b === 6) return true;
  if (Math.abs(a - b) === 6) return true;
  return false;
}

// 120
function in1To10(n, outsideMode) {
  if (!outsideMode) {
    return n >= 1 && n <= 10;
  } else {
    return n <= 1 || n >= 10;
  }
}

// 121
function specialEleven(n) {
  return n % 11 === 0 || n % 11 === 1;
}

// 122
function more20(n) {
  return n % 20 === 1 || n % 20 === 2;
}

// 123
function old35(n) {
  return (n % 5 === 0 && n % 3 !== 0) || (n % 3 === 0 && n % 5 !== 0);
}

// 124
function less20(n) {
  return n % 20 === 19 || n % 20 === 18;
}

// 125
function nearTen(num) {
  const remainder = num % 10;
  if (remainder > 5) {
    return 10 - remainder <= 2;
  } else {
    return remainder <= 2;
  }
}

// 126
function nearTen2(num) {
  return num % 10 <= 2 || num % 10 >= 8;
}

// 127
function isTeen(n) {
  return n >= 13 && n <= 19;
}

// 128
function teenSum(a, b) {
  if (isTeen(a) || isTeen(b)) return 19;
  return a + b;
}

// 129
function answerCell(isMorning, isMom, isAsleep) {
  if (isAsleep) return false;
  if (isMorning) {
    if (isMom) return true;
    return false;
  }
  return true;
}

// 130
function teaParty(tea, candy) {
  if (tea < 5 || candy < 5) return 0;
  if (Number(candy) >= Number(tea) * 2) return 2;
  if (Number(tea) >= Number(candy) * 2) return 2;
  return 1;
}

// 131
function fizzString(str) {
  if (str.startsWith("f") && str.endsWith("b")) return "FizzBuzz";
  if (str.startsWith("f")) return "Fizz";
  if (str.endsWith("b")) return "Buzz";
  return str;
}

// 132
function fizzString2(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz!";
  if (n % 3 === 0) return "Fizz!";
  if (n % 5 === 0) return "Buzz!";
  return `${n}!`;
}

// 133
function twoAsOne(a, b, c) {
  if (a + b === c) return true;
  if (a + c === b) return true;
  if (b + c === a) return true;
  return false;
}
