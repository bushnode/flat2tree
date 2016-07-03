'use strict';

const expect = require('chai').expect;
const flat2tree = require('../');

const nodes = [
    {id: 1, parentId: 0},
    {id: 2, parentId: 0},
    {id: 3, parentId: 1},
    {id: 4, parentId: 1},
    {id: 5, parentId: 2},
    {id: 6, parentId: 4},
    {id: 7, parentId: 5}
];

describe('Test module', () => {
    const nested = flat2tree(nodes);

    it('Must be instance of Array', () => expect(nested).to.be.instanceof(Array));

    it('Must be an array with size 2', () => expect(nested).to.have.property('length').that.is.an('number').that.equals(2));

    it('Must have all simple properties', () => nested.map(item => expect(item).to.have.all.keys(['id', 'parentId', 'children'])));

    it('Arrays full lengths must be equal', () => {
        const deepLength = array => array.length + array.map(item => deepLength(item.children)).reduce((sum, curr) => sum + curr, 0);

        expect(nodes).to.have.property('length').that.is.an('number').that.equals(deepLength(nested));
    });
});
