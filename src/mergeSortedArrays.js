export const mergeSortedArrays = (left, right) => {
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) result.push(left.shift());
        else result.push(right.shift());
    }

    return [ ...result, ...left, ...right ];
};

module.exports = mergeSortedArrays;