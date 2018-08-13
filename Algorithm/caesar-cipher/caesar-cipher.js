function caesarcipher(str, num) {
  let numberOfCharacters = 26;
  let validNum = num % numberOfCharacters;

  if (validNum < 0) {
    return caesarcipher(str, num + numberOfCharacters);
  }

  let result = '';

  for (let i = 0, len = str.length; i < len; i += 1) {
    let char = str[i];
    let dec = str[i] === str[i].toUpperCase() ? 65 : 97;

    if (/[\w]/g.test(char)) {
      char = String.fromCharCode((str.charCodeAt(i) - dec + num) % numberOfCharacters + dec);
    }

    result += char;
  }

  return result;
}
