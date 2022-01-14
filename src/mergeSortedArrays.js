const mergeSortedArrays = (tabOne, tabTwo) => {
    let result = [];
    while (tabOne.length && tabTwo.length) {
        if (tabOne[0] < tabTwo[0]) result.push(tabOne.shift());
        else if (tabOne[0] > tabTwo[0]) result.push(tabTwo.shift());
        else return [];
    }
    return result;
};

module.exports = mergeSortedArrays();