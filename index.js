const {
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
} = require('./src/string-lib.js');

console.log(kebobCase('test for strings'));
console.log(snakeCase('blah blah test'));
console.log(camelCase('one two three'));
console.log(removeExtraSpaces('  lmao l   ol   lmfao haha'));

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
