const isPascalCase = (str) => {
  const regex = /^([A-Z]+[a-z]*)+$/;
  return regex.test(str);
};

console.log(isPascalCase("PascalCase"));

const isCamelCase = (str) => {
  const regex = /^[a-z]+([A-Z]+[a-z]*)*$/;
  return regex.test(str);
};

console.log(isCamelCase("camelCase"));

const isKebabCase = (str) => {
  const regex = /^([a-z]+-)+[a-z]+$/;
  return regex.test(str);
};

console.log(isKebabCase("kebab-case"));

const isSnakeCase = (str) => {
  const regex = /^([a-z]+_)+[a-z]+$/;
  return regex.test(str);
};

console.log(isSnakeCase("snake_case"));

const whatAmI = (str) => {
  if (!str) return null;

  const casesFunctions = [isCamelCase, isKebabCase, isPascalCase, isSnakeCase];

  for (const func of casesFunctions) {
    if (func(str)) {
      const caseName = func.name.match(/[A-Z][a-z]{4,}/)[0]; // just for showing off!
      return `The string \`${str}\` is ${caseName} case!`;
    }
  }
};
console.log(whatAmI("k_k"));
