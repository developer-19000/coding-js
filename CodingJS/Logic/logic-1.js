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
