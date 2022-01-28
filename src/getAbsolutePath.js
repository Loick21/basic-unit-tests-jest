const getAbsolutePath = (tree, id) => {
    if (!tree.has(id)) return "null";
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

