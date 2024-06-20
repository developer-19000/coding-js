// 102
function countWordsEndingInYorZ(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Split the string into words using regex to include words followed by non-alphabetic characters
  let words = str.split(/[^a-z]+/);

  // Initialize the counter
  let count = 0;

  // Loop through each word to check the condition
  words.forEach((word) => {
    if (word.endsWith("y") || word.endsWith("z")) {
      count++;
    }
  });

  return count;
}

// 103
function withoutString(base, remove) {
  let result = "";
  let removeLower = remove.toLowerCase(); // Convert the remove string to lowercase for case-insensitive comparison
  let i = 0;

  while (i < base.length) {
    // Extract the substring from base of the same length as remove for comparison
    let sub = base.slice(i, i + remove.length).toLowerCase();

    if (sub === removeLower) {
      // If the substring matches the remove string, skip over it
      i += remove.length;
    } else {
      // If it doesn't match, add the current character to the result
      result += base[i];
      i++;
    }
  }

  return result;
}
