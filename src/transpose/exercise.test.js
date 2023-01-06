const transpose = require("./exercise");

describe("Transpose", () => {
  test("empty matrix", () => {
    expect(transpose([])).toEqual([]);
  });
  test("single row matrix (2x1) transposes single column matrix (1x2)", () => {
    expect(transpose(["A1"])).toEqual(["A", "1"]);
  });
  test("single column matrix (1x2) transposes single row matrix (2x1)", () => {
    expect(transpose(["A", "1"])).toEqual(["A1"]);
  });
  test("3x2 transposes into 2x3", () => {
    const input = ["ABC", "123"];
    const expected = ["A1", "B2", "C3"];
    expect(transpose(input)).toEqual(expected);
  });
});
