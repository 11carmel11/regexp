const { alphanumericRegex } = require("./config");

/**
 * * Usernames can contain letters (a-z), numbers (0-9), and periods (.).
 * * Usernames cannot contain [&, =, _, +, -, ,, ', <, >] or more then one period in a row.
 * * Usernames can begin or end with non-alphanumeric characters except periods (.)
 * @param {string} mail Tested email address
 * @returns {boolean} Indication if an address is valid for gmail
 */
const isGmail = (mail) => {
  const regex = new RegExp(
    `^${alphanumericRegex}+\.?${alphanumericRegex}+@gmail\.com$`
  );
  return regex.test(mail);
};

console.log(isGmail("11carmrl11@gmail.com"));

/**
 like `isGmail` but for every email domain.
 */
const isEmail = (mail) => {
  const regex = new RegExp(
    `^${alphanumericRegex}+\.?${alphanumericRegex}+[a-zA-Z]+\.[a-zA-Z]+$`
  );
  return regex.test(mail);
};

console.log(isEmail("11carmel11@walla.fakecom"));
