const treeObj = require('./tree');
const Node = treeObj.Node;

const sortedArray = [1,2,5,6,8,10,19,21,34,35,36,37,40,47,56,57,58,59,60,62];
const firstExample = [1,2,3,4,5,6,7];

const buildIt = function(data) {
	let queue = [],
		currentValue,
		tree = new Node();

	queue.push(data);
	let i=0;
	while(queue.length > 0) {
		currentValue = queue.shift();
		let midPlace = Math.floor(currentValue.length/2);
		let singleNode = currentValue[midPlace];

		tree.append(singleNode);
		
		const leftRemaining = currentValue.slice(0,midPlace),
			rightRemaining = currentValue.slice(midPlace+1);

		if (leftRemaining.length > 0) { queue.push(leftRemaining); }

		if (rightRemaining.length > 0) { queue.push(rightRemaining); }
	}

	return tree;
}

const tree = buildIt(sortedArray);
tree.printTree( tree );