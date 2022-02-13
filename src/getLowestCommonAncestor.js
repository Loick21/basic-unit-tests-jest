const getAbsolutePath = require("./getAbsolutePath");

const getLowestCommonAncestor = (tree, id1, id2) => {
    const path1 = getAbsolutePath(tree,id1);
    const path2 = getAbsolutePath(tree,id2);
    let result = -1;
    while (path1.length && path2.length) {
        if (path1[0] !== path2[0]) break;
        result = path1[0];
        path1.shift();
        path2.shift();
    }
    return result;
};

module.exports = getLowestCommonAncestor;