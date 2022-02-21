/**
 * * Usernames can contain letters (a-z), numbers (0-9), and periods (.).
 * * Usernames cannot contain [&, =, _, +, -, ,, ', <, >] or more then one period in a row.
 * * Usernames can begin or end with non-alphanumeric characters except periods (.)
 * @param {string} mail Tested email address
 * @returns {boolean} Indication if an address is valid for gmail
 */
const isGmail = (mail) => {
  const regex = /^[0-9a-zA-Z]+\.?[0-9a-zA-Z]+@gmail\.com$/;
  return regex.test(mail);
};

console.log(isGmail("11carmrl11@gmail.com"));
