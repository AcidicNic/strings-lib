/**
 * String Lib
 */

// Makes the first character of a given string uppercase.
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// Makes all characters uppercase.
function allCaps(str) {
  return str.toUpperCase();
}

// Makes the first character of each word uppercase. Imagine that each word is separated by a space.
function capitalizeWords(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] = capitalize(words[i]);
    }
  }
  return words.join(' ');
}

// Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
function removeExtraSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
}

// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
function kebobCase(str) {
  return removeExtraSpaces(str.toLowerCase()).replace(/ /g, '-');
}

// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
function snakeCase(str) {
  return removeExtraSpaces(str.toLowerCase()).replace(/ /g, '_');
}

// Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
  const camelCaseStr = removeExtraSpaces(capitalizeWords(str)).replace(/ /g, '');
  return camelCaseStr[0].toLowerCase() + camelCaseStr.slice(1);
}

// Takes the first character of the string and moves it to the end of the string.
function shift(str) {
  return str.slice(1) + str[0];
}

// Convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
function makeHashTag(str) {
  const wordList = removeExtraSpaces(str.toLowerCase()).split(' ');
  if (wordList.length > 3) {
    const sortedWords = wordList.sort( (wordA, wordB) => wordB.length - wordA.length);
    return sortedWords.slice(0, 3).map(word => '#' + word);
  }
  return wordList.map(word => '#' + word);
}

// Returns true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab)
function isEmpty(str) {
  return str.replace(/\s+/g, '').trim() === '';
}

module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
}
