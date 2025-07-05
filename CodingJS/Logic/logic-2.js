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
