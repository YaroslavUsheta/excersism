const { transpose, isSingleColumn } = require("./exercise");

describe("Transpose", () => {
  test("isSingleColumn returns true for [A, B]", () => {
    expect(isSingleColumn(["A", "B"])).toBeTruthy();
  });
  test("isSingleColumn return  for [A, B, C]", () => {
    expect(isSingleColumn(["A", "B", "C"])).toBeTruthy();
  });
  test("isSingleColumn return false for [AB, CD]", () => {
    expect(isSingleColumn(["AB", "CD"])).toBeFalsy();
  });
  test("isSingleColumn return false for [AB, CD]", () => {
    expect(isSingleColumn(["AB", "CD"])).toBeFalsy();
  });  
  test("isSingleColumn returns false for [string, number] because it's not a valid matrix (we have number in it)", () => {
    expect(isSingleColumn(["A", 10])).toBeFalsy();
  });
  test("isSingleColumn returns false for number (not a valid matrix)", () => {
    expect(isSingleColumn(25)).toBeFalsy();
  });
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
)