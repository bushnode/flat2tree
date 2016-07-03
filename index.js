'use strict';

/*
Не сказано, что id не может быть 0.
В случае ошибочных входных данных не должно генерироваться исключение.
Входные данные модифицируются, что не оговорено.
 */

let xxx = [1,2,3];

console.log('XXX', xxx.push(5));

const nodes = [
    {id: 1, parentId: 0},
    {id: 2, parentId: 0},
    {id: 3, parentId: 1},
    {id: 4, parentId: 1},
    {id: 5, parentId: 2},
    {id: 6, parentId: 4},
    {id: 7, parentId: 5}
];

let map = {}, node, roots = [];
for (let i = 0; i < nodes.length; i += 1) {
    node = nodes[i];
    node.children = [];
    map[node.id] = i;
    if (node.parentId != 0) {
        nodes[map[node.parentId]].children.push(node);
    } else {
        roots.push(node);
    }
}

console.log('RES:', JSON.stringify(roots, null, "\t"));

const nodes2 = [
    {id: 1, parentId: 0},
    {id: 2, parentId: 0},
    {id: 3, parentId: 1},
    {id: 4, parentId: 1},
    {id: 5, parentId: 2},
    {id: 6, parentId: 4},
    {id: 7, parentId: 5}
];

let result = [], idx = {0: {children: result}};
for (let i = 0; i < nodes2.length; i++) {
    let node = nodes2[i];
    let parent = idx[node.parentId];
    idx[node.id] = parent.children[parent.children.length] = Object.assign({}, node, {children:[]});
}

console.log('RESULT:', JSON.stringify(result, null, "\t"));
