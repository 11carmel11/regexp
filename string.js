const isPascalCase = (str) => {
  const regex = /^([A-Z]+[a-z]*)+$/;
  return regex.test(str);
};

console.log(isPascalCase("PascalCase"));
