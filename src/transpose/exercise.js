//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function transposeColumn(input) {
  const output = input.join("");
  return [output];
}

function transposeRow(input) {
  const output = input[0].split("");
  return output;
}

function isString(x) {
  return typeof x === "string";
}

function hasSingleCharacter(x) {
  return x.length === 1;
}

/**
 * Return true if the input represents a single column.
 *
 * @example
 *
 * ['A', 'B', 'C', 'D'] // is a single column
 *
 * ['AB', '12'] // is not a single column
 *
 * @param input
 * @returns {boolean}
 */
function isSingleColumn(input) {
  const isArray = Array.isArray(input);
  if (isArray) {
    const everyItemIsAString = input.every(arrayItem => isString(arrayItem));
    const everyStringHasASingleCharacter = input.every(arrayItem => hasSingleCharacter(arrayItem));
    return isArray && everyItemIsAString && everyStringHasASingleCharacter;
  }
  return false;
}

function transpose(input) {
  // It satisfies the case if input = []
  if (input.length === 0) {
    return input;
  }

  // satisfies input = ['A', '1']
  if (isSingleColumn(input)) {
    return transposeColumn(input);
  }

  // satisfies input = ['A1']
  return transposeRow(input);
}

module.exports = { transpose, isSingleColumn };
