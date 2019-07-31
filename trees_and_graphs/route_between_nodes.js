const treeObj = require('./tree');
const Node = treeObj.Node;

const a = new Node(9);
const b = new Node(8);
const c = new Node(15);

a.left = b;
a.right = c;

