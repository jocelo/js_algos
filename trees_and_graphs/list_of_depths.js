const treeObj = require('./tree');
const Node = treeObj.Node;

function listOfDepths(tree) {
	var listOfLevel = [],
		listOfLists = [],
		node,
		currentLvl = [],
		nextLvl = [];

	currentLvl.push(tree);

	while (currentLvl.length != 0) {
		node = currentLvl.shift();
		console.log('doing this one:', node.data);
		listOfLevel.push(node.data);

		if (node.left) {
			nextLvl.push(node.left);
		}

		if (node.right) {
			nextLvl.push(node.right);
		}

		if (currentLvl.length == 0) {
			listOfLists.push(listOfLevel);
			listOfLevel = [];
			currentLvl = nextLvl;
			nextLvl = [];
		}
	}

	console.log(listOfLists);
}

var tree = new Node(4);

tree.append(2);
tree.append(6);
tree.append(1);
tree.append(3);
tree.append(5);
tree.append(7);

listOfDepths(tree);

var secondTree = new Node(36);

secondTree.append(1);
secondTree.append(2);
secondTree.append(5);
secondTree.append(6);
secondTree.append(8);
secondTree.append(10);
secondTree.append(19);
secondTree.append(21);
secondTree.append(34);
secondTree.append(35);

secondTree.append(37);
secondTree.append(40);
secondTree.append(47);
secondTree.append(56);
secondTree.append(57);
secondTree.append(58);
secondTree.append(59);
secondTree.append(60);
secondTree.append(62);
secondTree.append(67);

listOfDepths(secondTree);