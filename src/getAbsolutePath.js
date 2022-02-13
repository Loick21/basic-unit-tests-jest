const getAbsolutePath = (tree, id) => {
    if(checkTree(tree)) throw new Error("invalid tree");
    if(checkId(id)) throw new Error("id should not be null or undefined");
    if (!checkTreeId(tree,id)) throw new Error(`${id} not in tree`);
    let result = [];
    let element = tree.get(id);
    result = [...result, element.id];
    while (element.parent >= 0) {
        let parent = tree.get(element.parent);
        result = [ parent.id , ...result ]
        element = parent;
    }
    return result;
};

const checkTree = (tree) => {
    return tree === null || tree === undefined;
};

const checkId = (id) => {
    return id === null || id === undefined;
}
const checkTreeId = (tree,id) => {
    return tree.has(id);
};

module.exports = getAbsolutePath;

/*const getAbsolutePathMe = (tree, id) => {
    if (!tree.has(id)) return "null";
    let result = "";
    let element = tree.get(id);
    result = element.name;
    while (element.parent >= 0) {
        let parent = tree.get(element.parent);
        result = `${parent.name}/${result}`
        element = parent;
    }
    return result;
};*/

