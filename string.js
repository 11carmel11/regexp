const isPascalCase = (str) => {
  const regex = /^([A-Z]+[a-z]*)+$/;
  return regex.test(str);
};

const isCamelCase = (str) => {
  const regex = /^[a-z]+([A-Z]+[a-z]*)*$/;
  return regex.test(str);
};

const isKebabCase = (str) => {
  const regex = /^([a-z]+-)+[a-z]+$/;
  return regex.test(str);
};

const isSnakeCase = (str) => {
  const regex = /^([a-z]+_)+[a-z]+$/;
  return regex.test(str);
};

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

module.exports = {
  isPascalCase,
  isCamelCase,
  isKebabCase,
  isSnakeCase,
  whatAmI,
};
