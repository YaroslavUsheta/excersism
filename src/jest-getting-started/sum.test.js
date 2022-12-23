const sum = require('./sum');

describe('Tests for sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        const sumOf1And2 = sum(1, 2);
        expect(sumOf1And2).toBe(3);
    });
    test('adds 5 + 7 to equal 12', () => {
        const sumOf1And2 = sum(5, 7);
        expect(sumOf1And2).toBe(12);
    });
});
