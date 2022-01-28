const mergeSortedArrays = require("../src/mergeSortedArrays.js");

test("mergedSorted should return [1,2,3,4,5]", () => {
    expect(mergeSortedArrays([1,3,5],[2,4,6])).toStrictEqual([1,2,3,4,5,6]);
});

test("mergedSorted should return [1,2,3]", () => {
    expect(mergeSortedArrays([1,2,3],[])).toStrictEqual([1,2,3]);
});

test("mergedSorted should return []", () => {
    expect(mergeSortedArrays([],[])).toStrictEqual([]);
});

