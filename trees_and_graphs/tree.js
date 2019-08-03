const Node = function(data) {
	this.data = data;
	this.children = [];

	this.addEdge = function(node) {
		// todo: validate if node already exists
		this.children.push(node);
	}
}

module.exports = {
	Node: Node
};