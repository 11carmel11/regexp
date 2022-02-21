const isYYYY_DD_MM = (date) => {
  const regex =
    /^((?:19|20)\d{2})[\./-](0?[1-9]|1[012])[\./-]([12][0-9]|3[01]|0?[1-9])$/;
  return regex.test(date);
};
console.log(isYYYY_DD_MM("2021-12-13"));
