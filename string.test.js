const {
  isPascalCase,
  isCamelCase,
  isKebabCase,
  isSnakeCase,
  whatAmI,
} = require("./string");

describe("string cases", () => {
  const wrongCase = "notAny_case-at all!";

  it("should check that string is pascal case", () => {
    expect(isPascalCase("PascalCase")).toBeTruthy();
    expect(isPascalCase(wrongCase)).toBeFalsy();
  });

  it("should check that string is camel case", () => {
    expect(isCamelCase("camelCase")).toBeTruthy();
    expect(isCamelCase(wrongCase)).toBeFalsy();
  });

  it("should check that string is kebab case", () => {
    expect(isKebabCase("kebab-case")).toBeTruthy();
    expect(isKebabCase(wrongCase)).toBeFalsy();
  });

  it("should check that string is snake case", () => {
    expect(isSnakeCase("snake_case")).toBeTruthy();
    expect(isSnakeCase(wrongCase)).toBeFalsy();
  });

  it("should detect string's case", () => {
    const ansTemplate = (str, caseName) =>
      `The string \`${str}\` is ${caseName} case!`;

    expect(whatAmI("PascalCase")).toBe(ansTemplate("PascalCase", "Pascal"));
    expect(whatAmI("camelCase")).toBe(ansTemplate("camelCase", "Camel"));
    expect(whatAmI("kebab-case")).toBe(ansTemplate("kebab-case", "Kebab"));
    expect(whatAmI("snake_case")).toBe(ansTemplate("snake_case", "Snake"));
    expect(whatAmI(wrongCase)).not.toBeDefined();
  });
});
