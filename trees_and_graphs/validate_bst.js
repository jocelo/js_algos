const treeObj = require('./tree');
const Node = treeObj.Node;

function validate(node, min, max) {
	if (node == null) {
		return true;
	}
	
	console.log('====================');
	console.log('checking', node.data);
	console.log('left:', node.left);
	console.log('right', node.right);
	console.log('min',min,'max',max);

	if ((min != null && node.data <= min) || (max != null && node.data > max)) {
		return false;
	}

	const checkLeft = validate(node.left, min, node.data);
	const checkRight = validate(node.right, node.data, max);

	if (!checkLeft || !checkRight) {
		return false;
	}

	//console.log('true');
	return true;
}

var bt1a = new Node(5);
var bt1b = new Node(4);
var bt1c = new Node(6);
var bt1d = new Node(1);
var bt1e = new Node(100);

bt1a.left = bt1b;
bt1a.right = bt1c;
bt1b.left = bt1d;
bt1b.right = bt1e;

bt1a.printTree();
console.log(
	validate(bt1a)
);


var bt2a = new Node(5);
var bt2b = new Node(3);
var bt2c = new Node(6);
var bt2d = new Node(1);
var bt2e = new Node(4);

bt2a.left = bt2b;
bt2a.right = bt2c;
bt2b.left = bt2d;
bt2b.right = bt2e;

bt2a.printTree();
console.log(
	validate(bt2a)
);

/*
var tree = new Node(4);

tree.append(2);
tree.append(6);
tree.append(1);
tree.append(3);
tree.append(5);
tree.append(7);

tree.printTree();

console.log(
	validate(tree)
);
*/