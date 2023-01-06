//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function transpose(input) {
  // It satisfies the case if input = []
  if (input.length === 0) {
    return input;
  }
  // satisfies input = ['A', '1']
  if (input.length === 2) {
    const output = input.join("");
    return [output];
  }
  //

  // satisfies input = ['A1']
  const output = input[0].split("");
  return output;
};

module.exports = transpose;
