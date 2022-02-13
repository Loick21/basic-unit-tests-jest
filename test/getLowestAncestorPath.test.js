const getLowestCommonAncestorTest = require("../src/getLowestCommonAncestor.js");
let getAbs = require("../src/getAbsolutePath.js");

test(("getLowestCommonAncestorTest should return : 2 "), () => {
    const root = {id: 0, name: "root", parent: -1};
    const folder1 = {id: 1, name: "folder1", parent: 0};
    const folder2 = {id: 2, name: "folder2", parent: 1};
    const folder3 = {id: 3, name: "folder3", parent: 2};
    const folder4 = {id: 4, name: "folder4", parent: 2};
    const file1 = {id: 5, name: "file1", parent: 3};
    const file2 = {id: 6, name: "file2", parent: 4};
    const tree = new Map();
    tree.set(root.id, root);
    tree.set(folder1.id, folder1);
    tree.set(folder2.id, folder2);
    tree.set(folder3.id, folder3);
    tree.set(folder4.id, folder4);
    tree.set(file1.id, file1);
    tree.set(file2.id, file2);

    expect(getLowestCommonAncestorTest(tree, 5, 6)).toStrictEqual(2);
});