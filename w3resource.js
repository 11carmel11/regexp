// 1.
exports.firstCharIsUpper = (str) => {
  const regex = /^[A-Z]/;
  return regex.test(str);
};

// 2.
// starting with 34 or 37, length 15 digits.
exports.isAmericanExpress = (ccNum) => {
  const regex = /3[47]\d{13}/;
  return regex.test(ccNum);
};

// 5.
const trim = (str) => {
  const trimmerRegex = /^\s+|\s+$/g;
  return str.replace(trimmerRegex, "");
};
exports.trim = trim;

// 6.
exports.countWordsInString = (str) => {
  str = trim(str);
  if (!str) return 0;
  const regex = /\s+/g;
  const dividedToWords = str.split(regex);
  return dividedToWords.length;
};

// 8.
exports.countVowelsInString = (str) => {
  const regex = /[aeiou]/gi;
  return str.match(regex).length;
};

// 10.
const { alphanumericRegex } = require("./config");
exports.isAlphaNumeric = (str) => {
  const regex = new RegExp(`^${alphanumericRegex}+$`);
  return !!str && regex.test(str);
};

// 11.
exports.isTimeString = (time) => {
  const regex = /^(00|0?[1-9]|1[0-2])(:[0-5]\d){1,2}$/;
  return regex.test(time);
};

// 16.
exports.isHexadecimal = (str) => {
  const regex = /^[0-9a-fA-F]+$/;
  return regex.test(str);
};

// 19.
exports.isHtml = (html) => {
  const startIndex = html.indexOf("<") + 1;
  const closeIndex = html.indexOf(">");
  const tagName = html.slice(startIndex, closeIndex);

  const regex = new RegExp(`^<${tagName}>[^><]*</${tagName}>`);
  return regex.test(html);
};
