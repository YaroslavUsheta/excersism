const transpose = require("./exercise");

describe("Transpose", () => {
  test("simple", () => {
    const input = ["ABC", "123"];
    const expected = ["A1", "B2", "C3"];
    expect(transpose(input)).toEqual(expected);
  });
});
