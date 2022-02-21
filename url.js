const isUrl = (url) => {
  const regex = /^https?:\/\/www\.[a-zA-Z]+\.[a-zA-Z]{3}$/;
  return regex.test(url);
};

console.log(isUrl("https://www.github.com"));
