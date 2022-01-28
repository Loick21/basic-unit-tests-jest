export const createTree = (elements) => {
        let table = new Map();
        elements.forEach(element => table.set(element.id, element));
    return table;
};

