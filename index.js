'use strict';

module.exports = (nodes) => {
    let result = [], idx = {0: {children: result}};
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i], siblings = idx[node.parentId].children;
        idx[node.id] = siblings[siblings.length] = Object.assign({children: []}, node);
    }
    return result;
};
