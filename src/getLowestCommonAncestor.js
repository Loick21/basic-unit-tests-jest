const getAbsolutePath = require("./getAbsolutePath");

const getLowestCommonAncestor = (tree, id1, id2) => {
    const path1 = getAbsolutePath(id1);
    const path2 = getAbsolutePath(id2);
    let result = -1;
    while (path1.length && path2.length) {
        if (path1[0].id !== path2[0].id) {
            result = path1.shift().id;
            break;
        }
    }
    return result;
};

module.exports = getLowestCommonAncestor;