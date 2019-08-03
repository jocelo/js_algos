const Node = function(data) {
	this.data = data;
	this.left = null;
	this.right = null;
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
	var values = [];
	var head = this;
	queue.push(head);
	
	while(queue.length > 0) {
		const current = queue.shift();
		console.log('currnet', current);
		values.push(current.data);
		if (current.left) {
			queue.push(current.left);
		}
		if (current.right) {
			queue.push(current.right);
		}
	}
	console.log(values);
}

module.exports = {
	Node: Node
};