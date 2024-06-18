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

