const isILPhoneNumber = (num) => {
  const regex = /^0(5[(0-6)89]|[23489])-\d{7}$/;
  return regex.test(num);
};

console.log(isILPhoneNumber("03-9400454"));
