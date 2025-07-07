// 145 - first solution
function makeBricks(small, big, goal) {
  for (let i = 1; i <= small; i++) {
    let inchesLeft = goal - i;
    if (inchesLeft === 0) return true;
    if (inchesLeft % 5 === 0 && inchesLeft / 5 <= big) return true;
  }

  for (let i = 1; i <= big; i++) {
    let inchesLeft = goal - i * 5;
    if (inchesLeft === 0) return true;
    if (inchesLeft <= small && inchesLeft >= 0) return true;
  }

  return false;
}

// better solution
function makeBricks2(small, big, goal) {
  // how many bigs i can use.
  let bigsIcanUse = Math.min(Math.floor(goal / 5), big);
  goal = goal - bigsIcanUse * 5;
  if (goal === 0 || goal <= small) return true;
  return false;
}

// even better solution
function makeBricks3(small, big, goal) {
  return goal - Math.min(Math.floor(goal / 5), big) * 5 <= small;
}

// 146
function loneSum(a, b, c) {
  let sum = 0;
  if (a !== b && a !== c) sum += a;
  if (b !== a && b !== c) sum += b;
  if (c !== a && c !== b) sum += c;
  return sum;
}

// 147
function luckySum(a, b, c) {
  if (a === 13) return 0;
  if (b === 13) return a;
  if (c === 13) return a + b;
  return a + b + c;
}

// 148
function noTeenSum(a, b, c) {
  let sum = 0;
  if (!isTeen(a)) sum += a;
  if (!isTeen(b)) sum += b;
  if (!isTeen(c)) sum += c;
  return sum;
}

function noTeenSum2(a, b, c) {
  let result = [a, b, c].reduce((acc, next) => {
    return acc + (!isTeen(next) ? next : 0);
  }, 0);

  return result;
}

function isTeen(n) {
  return (n >= 13 && n <= 14) || (n >= 17 && n <= 19);
}

let arr = [3, 4, 6];
let res = arr.reduce((acc, next) => {
  return acc + next;
}, 0);

// 149
function roundSum(a, b, c) {
  return roundNumber(a) + roundNumber(b) + roundNumber(c);
}

function roundNumber(n) {
  if (n >= 0) {
    let rightDigit = n % 10;
    if (rightDigit >= 5) return Math.ceil(n / 10) * 10;
    else return Math.floor(n / 10) * 10;
  } else {
    let reverse = n * -1;
    let rightDigit = reverse % 10;
    if (rightDigit < 5) return Math.floor(reverse / 10) * -10;
    else return Math.ceil(reverse / 10) * -10;
  }
}

// 150
function closeFar(a, b, c) {
  if (numAreClose(a, b)) return numAreFar(a, c) && numAreFar(b, c);
  if (numAreClose(a, c)) return numAreFar && numAreFar(b, c);
  return false;
}

function closeFar2(a, b, c) {
  let abClose = numAreClose(a, b);
  let acClose = numAreClose(a, c);

  let abFar = numAreFar(a, b);
  let acFar = numAreFar(a, c);
  let bcFar = numAreFar(b, c);

  console.log(abClose);
  console.log(acClose);

  if (abClose) return acFar && bcFar;
  if (acClose) return abFar && bcFar;
  return false;
}

function numAreClose(a, b) {
  return Math.abs(a - b) <= 1;
}

function numAreFar(a, b) {
  return Math.abs(a - b) >= 2;
}

// 151
function blackjack(a, b) {
  if (a > 21 && b > 21) return 0;
  if (a > 21) return b;
  if (b > 21) return a;

  let aDiff = Math.abs(21 - a);
  let bDiff = Math.abs(21 - b);

  return aDiff > bDiff ? b : a;
}
