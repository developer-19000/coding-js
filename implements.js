// 1 - custom charAt
function customCharAt(str, index) {
  if (index >= 0 && index < str.length) {
    return str[index];
  } else {
    return "";
  }
}

// 2 - custom toUpperCase
function customToUpperCase(str) {
  let result = "";
  for (let char of str) {
    // get the ASCII code of the current character
    let charCode = char.charCodeAt(0);

    // Check if the ASCII code falls in the range of 97 to 122 (if it does , it is a lowercase letter)
    if (charCode >= 97 && charCode <= 122) {
      // if it is lowercase , we subtract it by 32 to get the uppercase form of the letter
      charCode -= 32;
    }

    // using this method we can find the character of certain ASCII code number
    result += String.fromCharCode(charCode);
  }
  return result;
}

