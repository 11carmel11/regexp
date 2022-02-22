const {
  firstCharIsUpper,
  isAmericanExpress,
  trim,
  countWordsInString,
  countVowelsInString,
  isAlphaNumeric,
  isTimeString,
  isHexadecimal,
  isHtml,
} = require("./w3resource");

describe("w3 exercises", () => {
  it("should check if first char in string is uppercase", () => {
    expect(firstCharIsUpper("Hello")).toBeTruthy();
    expect(firstCharIsUpper("hello")).toBeFalsy();
  });

  it("should validate american express cc number", () => {
    expect(isAmericanExpress("345678901234567")).toBeTruthy();
    expect(isAmericanExpress("123456789")).toBeFalsy();
  });

  it("should trim a string", () => {
    expect(trim("    hello world   ")).toBe("hello world");
  });

  it("should count words in a string", () => {
    expect(countWordsInString("hello world. my name is carmel")).toEqual(6);
  });

  it("should count vowels in a string", () => {
    expect(countVowelsInString("hello world")).toEqual(3);
  });

  it("should check if a string is alphanumeric", () => {
    expect(isAlphaNumeric("11carmel11")).toBeTruthy();
    expect(isAlphaNumeric("(ar^^@|Ru|e$$")).toBeFalsy();
  });

  it("should check if a string is (h)h:mm:ss time format", () => {
    expect(isTimeString("11:23:29")).toBeTruthy();
    expect(isTimeString("9:42:17")).toBeTruthy();
    expect(isTimeString("52:64:12")).toBeFalsy();
  });

  it("should check if a string is hexadecimal number", () => {
    expect(isHexadecimal("f9a1cf")).toBeTruthy();
    expect(isHexadecimal("a2h9oq")).toBeFalsy();
  });

  it("should check if html element is valid", () => {
    expect(isHtml("<p>hello</p>")).toBeTruthy();
    expect(isHtml("<p>goodbye</b>")).toBeFalsy();
  });
});
