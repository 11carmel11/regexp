const isYYYY_DD_MM = (date) => {
  const regex =
    /^((1\d{3}|20([01][0-9]|2[0-2])))-(0[1-9]|1[012])-([12][0-9]|3[01]|0[1-9])$/;
  return regex.test(date);
};
console.log(isYYYY_DD_MM("1999-10-03"));

const isYY_DD_MM = (date) => {
  const regex = /^(\d{2})-(0[1-9]|1[012])-([12][0-9]|3[01]|0[1-9])$/;
  return regex.test(date);
};
console.log(isYY_DD_MM("99-10-03"));
