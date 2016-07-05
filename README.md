# flat2tree

Conversion from flat to the corresponding tree-like objects.

## Installation

```sh
git clone https://github.com/bushnode/flat2tree.git
```
## Usage

```javascript
const flat2tree = require('./flat2tree');
const nodes = [
	{id: 1, parentId: 0},
	{id: 2, parentId: 0},
	{id: 3, parentId: 1},
	{id: 4, parentId: 1},
	{id: 5, parentId: 2},
	{id: 6, parentId: 4},
	{id: 7, parentId: 5}
];
console.log(flat2tree(nodes));
```

### Output

```javascript
const nested = [
	{
    	"children": [
        	{
            	"id": 3,
            	"parentId": 1
        	},
        	{
            	"children": [
                	{
                    	"id": 6,
                    	"parentId": 4
                	}
            	],
            	"id": 4,
            	"parentId": 1
        	}
    	],
    	"id": 1,
    	"parentId": 0
	},
...
```

### Tests

```sh
npm run test
```
