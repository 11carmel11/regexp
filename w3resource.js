// 1.
const firstCharIsUpper = (str) => {
  const regex = /^[A-Z]/;
  return regex.test(str);
};

console.log(firstCharIsUpper("Cadae"));
