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
    let charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      charCode -= 32;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

