function isString(itemToCheck) {
    let typeOfItemInTheInput = typeof itemToCheck;
    let resultOfTheComparison = typeOfItemInTheInput === "string";
    return resultOfTheComparison;
}
function arrayContainsOnlyStrings(someArray) {
    for (let i = 0; i < someArray.length; i++) {
        if (!isString(someArray[i])) {
            return false;
        }
    }
    return true;
}

function square(x) {
    return x*x;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

describe('Exploring javascript api', () => {
    test("Explore how array.every works", () => {
        // expect(arrayContainsOnlyStrings(["a", "b", 10])).toBeFalsy();
        expect(["a", "b", 10, "c"].every(isString)).toBeFalsy();
        // expect(arrayContainsOnlyStrings(["a", "b", "c"])).toBeTruthy();
    })
    test("Explore how array.map works", () => {
        // map transforms array into another array
        expect([1, 2, 3, 4].map(square)).toStrictEqual([1, 4, 9, 16]);
    })
});
