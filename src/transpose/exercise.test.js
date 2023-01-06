const transpose = require("./exercise");

describe("Transpose", () => {
  test("empty matrix", () => {
    expect(transpose([])).toEqual([]);
  });
  test("single row matrix transposes single column matrix", () => {
    expect(transpose(["A1"])).toEqual(["A", "1"]);
  });
  test("single column matrix transposes single row matrix", () => {
    expect(transpose(["A", "1"])).toEqual(["A1"]);
  });
  test("3x2 matrix", () => {
    const input = ["ABC", "123"];
    const expected = ["A1", "B2", "C3"];
    expect(transpose(input)).toEqual(expected);
  });
});
