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

// 3 - custom toLowerCase
function customToLowerCase(str) {
  let result = "";
  for (let char of str) {
    // get the ASCII code of the current character
    let charCode = char.charCodeAt(0);

    // Check if the ASCII code falls in the range of 65 to 90 (if it does, it is an uppercase letter)
    if (charCode >= 65 && charCode <= 90) {
      // if it is uppercase, we add 32 to get the lowercase form of the letter
      charCode += 32;
    }

    // using this method we can find the character of a certain ASCII code number
    result += String.fromCharCode(charCode);
  }
  return result;
}

// 4 - custom startsWith
function customStartsWith(str, search) {
  // edge case: if the search string is longer than the string, return false
  if (search.length > str.length) {
    return false;
  }
  // loop over the characters of the search string
  for (let i = 0; i < search.length; i++) {
    // if the current character of the string does not match the current character of the search string, return false
    if (str[i] !== search[i]) {
      return false;
    }
  }
  // if we have checked all the characters and they all match, return true
  return true;
}

// 5 - custom endsWith
function customEndsWith(str, search) {
  // edge case: if the search string is longer than the string, return false
  if (search.length > str.length) {
    return false;
  }
  // loop over the characters of the string
  for (let i = 0; i < search.length; i++) {
    // if the current character of the string does not match the current character of the search string, return false
    if (str[str.length - 1 - i] !== search[search.length - 1 - i]) {
      return false;
    }
  }
  // if we have checked all the characters and they all match, return true
  return true;
}

// 6 - custom multiply
function customMultiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

// 7 - custom repeat
function customRepeat(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

// 8 - custom slice
function customSlice(str, start, end = str.length) {
  // if the end is not specified, we set it to the length of the string

  // if start is equal to end, we return an empty string
  if (start === end) return "";

  // if end is greater than start, we return empty string
  if (end < start) return "";

  // if start is negative , we count back from the end
  if (start < 0) start = str.length + start;

  // if end is negative, we count back from the end
  if (end < 0) end = str.length + end;

  // if start is greater than the length of the string, we return empty string
  if (start > str.length) return "";

  // if end is greater than the length of the string, we set it to the length of the string
  if (end > str.length) end = str.length;

  // normal case
  let result = "";
  for (let i = start; i < end; i++) {
    result += str[i];
  }
  return result;
}


