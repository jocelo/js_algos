const Node = function(data) {
	this.data = data;
	this.left = null;
	this.right = null;

	this.head = this;
}

Node.prototype.append = function(data) {
	debugger;
	if (data > this.data) {
		// right hand side ass
		if (this.right == null) {
			this.right = new Node(data);
		} else {
			this.right.append(data);
		}
	} else {
		if (this.left == null) {
			this.left = new Node(data);
		} else {
			this.left.append(data);
		}
	}
};

Node.prototype.printTree = function() {
	var queue = [];
	var list = [];
	var listOfLists = [];
	var nextQueue = [];
	var values = [];

	queue.push(this.head);
	
	while(queue.length > 0) {
		const node = queue.shift();
		list.push(node.data);

		if (node.left != null) {
			nextQueue.push(node.left);
		}
		if (node.right != null) {
			nextQueue.push(node.right);
		}

		if (queue.length == 0) {
			listOfLists.push(list);
			list = [];
			queue = nextQueue;
			nextQueue = [];
		}
	}
	
	for (let i=0 ; i<listOfLists.length ; i++) {
		const size = listOfLists.length - i;
		let spaces = new Array(size);
		spaces = spaces.join(' ');
		console.log(spaces,listOfLists[i]);
	}
}

module.exports = {
	Node: Node
};