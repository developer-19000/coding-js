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
