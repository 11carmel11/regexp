const isUrl = (url) => {
  const regex = /^https?:\/\/(www\.)?[a-zA-Z]+\.[a-zA-Z]{3}(\/[\w]*)*$/;
  return regex.test(url);
};

console.log(isUrl("https://www.github.com/11carmel11/regexp"));
