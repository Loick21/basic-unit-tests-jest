const getAbsolutepath = require("../src/getAbsolutePath.js");

test("getAbsolutePath should throw exception for id not in tree ", () => {
    const element1 = {id: 0, name: "root", parent: -1};
    const element2 = {id: 1, name: "folder", parent: 0};
    const element3 = {id: 2, name: "file", parent: 1};
    const tree = new Map();
    tree.set(element1.id, element1);
    tree.set(element2.id, element2);
    tree.set(element3.id, element3);
    expect(() => getAbsolutepath(tree, -1)).toThrowError("-1 not in tree");
});

test("getAbsolutePath should throw exception for tree undefined ", () => {
    expect(() => getAbsolutepath(undefined, 1)).toThrowError("invalid tree");
});

test("getAbsolutePath should throw exception for tree null ", () => {
    expect(() => getAbsolutepath(null, undefined)).toThrowError("invalid tree");
});

test("getAbsolutePath should throw exception for id undefined ", () => {
    const tree = new Map();
    tree.set(1,"value");
    expect(() => getAbsolutepath(tree, undefined)).toThrowError("id should not be null or undefined");
});

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

