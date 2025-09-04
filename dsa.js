const countLetters = (str) => {
  const splitStr = str.split("");
  const letters = [];
  let count = 1;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === splitStr[i + 1]) {
      count++;
    } else {
      letters.push(`${splitStr[i]}${count}`);
      count = 1;
    }
  }
  console.log(letters)
};

console.log(countLetters("mohammad"));
