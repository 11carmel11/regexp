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
