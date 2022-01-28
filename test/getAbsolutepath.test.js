const getAbsolutepath = require("../src/getAbsolutePath.js");

test("getAbsolutePath should return :  root/folder/file", () => {
    const element1 = {id: 0, name: "root", parent: -1};
    const element2 = {id: 1, name: "folder", parent: 0};
    const element3 = {id: 2, name: "file", parent: 1};
    const tree = new Map();
    tree.set(element1.id, element1);
    tree.set(element2.id, element2);
    tree.set(element3.id, element3);
    const result = [0, 1, 2];
    expect(getAbsolutepath(tree, 2)).toStrictEqual(result);
});

test("getAbsolutePath should return :  root/folder", () => {
    const element1 = {id: 0, name: "root", parent: -1};
    const element2 = {id: 1, name: "folder", parent: 0};
    const element3 = {id: 2, name: "file", parent: 1};
    const tree = new Map();
    tree.set(element1.id, element1);
    tree.set(element2.id, element2);
    tree.set(element3.id, element3);
    const result = [0, 1];
    expect(getAbsolutepath(tree, 1)).toStrictEqual(result);
});

test("getAbsolutePath should return :  root", () => {
    const element1 = {id: 0, name: "root", parent: -1};
    const element2 = {id: 1, name: "folder", parent: 0};
    const element3 = {id: 2, name: "file", parent: 1};
    const tree = new Map();
    tree.set(element1.id, element1);
    tree.set(element2.id, element2);
    tree.set(element3.id, element3);
    const result = [0];
    expect(getAbsolutepath(tree, 0)).toStrictEqual(result);
});

test("getAbsolutePath should return :  nothing ", () => {
    const element1 = {id: 0, name: "root", parent: -1};
    const element2 = {id: 1, name: "folder", parent: 0};
    const element3 = {id: 2, name: "file", parent: 1};
    const tree = new Map();
    tree.set(element1.id, element1);
    tree.set(element2.id, element2);
    tree.set(element3.id, element3);
    expect(getAbsolutepath(tree, -1)).toStrictEqual("null");
});