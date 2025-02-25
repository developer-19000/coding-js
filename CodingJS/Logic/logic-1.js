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

console.log(alarmClock(3, true));

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
