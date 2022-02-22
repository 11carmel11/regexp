// 1.
const firstCharIsUpper = (str) => {
  const regex = /^[A-Z]/;
  return regex.test(str);
};

console.log(firstCharIsUpper("Cadae"));

// 2.
// starting with 34 or 37, length 15 digits.
const isAmericanExpress = (ccNum) => {
  const regex = /3[47]\d{13}/;
  return regex.test(ccNum);
};

console.log(isAmericanExpress("345678901234567"));

// 5.
const trim = (str) => {
  const trimmerRegex = /^\s+|\s+$/g;
  return str.replace(trimmerRegex, "");
};

console.log(trim("  hello world     "));

// 6.
const countWordsInString = (str) => {
  str = trim(str);
  if (!str) return 0;
  const regex = /\s+/g;
  const dividedToWords = str.split(regex);
  return dividedToWords.length;
};

console.log(countWordsInString("hello     world"));

// 8.
const countVowelsInString = (str) => {
  const regex = /[aeiou]/gi;
  return str.match(regex).length;
};

console.log(countVowelsInString("hello"));

// 10.
const { alphanumericRegex } = require("./config");
const isAlphaNumeric = (str) => {
  const regex = new RegExp(`^${alphanumericRegex}+$`);
  return !!str && regex.test(str);
};

console.log(isAlphaNumeric("11carmel11"));

// 11.
const isTimeString = (time) => {
  const regex = /^(00|0?[1-9]|1[0-2])(:[0-5]\d){1,2}$/;
  return regex.test(time);
};

console.log(isTimeString("00:23:59"));
