'use strict';

/*
Preferences before other unflatten packages:
- In case of erroneous input data exception must not be generated;
- Input data will not be modified.
 */

module.exports = (nodes) => {
    let result = [], idx = {0: {children: result}};
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let parent = idx[node.parentId];
        idx[node.id] = parent.children[parent.children.length] = Object.assign({children: []}, node);
    }
    return result;
};
