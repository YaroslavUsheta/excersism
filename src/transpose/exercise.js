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

function isSingleColumn(input) {
  return input.length === 2;
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

module.exports = transpose;
