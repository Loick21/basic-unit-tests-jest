const createTree = require("../src/tree.js");

test("create tree should return dict of {element1, element2, element3}", () => {
    const element1 = {id: 0, name: "root", parent: -1};
    const element2 = {id: 1, name: "folder", parent: 0};
    const element3 = {id: 2, name: "file", parent: 1};
    const elements = [element1, element2, element3];
    const result = new Map();
    result.set(element3.id, element3);
    result.set(element2.id, element2);
    result.set(element1.id, element1);
    expect(createTree(elements)).toStrictEqual(result);
});

test("create tree should return dict of {element1, element3}", () => {
    const element1 = {id: 0, name: "root", parent: -1};
    const element2 = {id: 1, name: "folder", parent: 0};
    const element3 = {id: 1, name: "file", parent: 1};
    const elements = [element1, element2, element3];
    const result = new Map();
    result.set(element1.id, element1);
    result.set(element3.id, element3);
    expect(createTree(elements)).toStrictEqual(result);
});

test("create tree should return dict of {}", () => {
    const elements = [];
    const result = new Map();
    expect(createTree(elements)).toStrictEqual(result);
});



