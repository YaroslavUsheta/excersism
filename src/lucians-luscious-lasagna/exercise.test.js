const {EXPECTED_MINUTES_IN_OVEN} = require("./exercise");

describe("Lucian's Luscious Lasagna", () => {
    test('EXPECTED_MINUTES_IN_OVEN > constant is defined correctly', () => {
        expect(EXPECTED_MINUTES_IN_OVEN).toBe(40);
    });
});
