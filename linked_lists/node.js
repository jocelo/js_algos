const Node = function(value) {
	this.value = value;
	this.next = null;
}

const printList = function(node) {
	var head = node;
	var keepGoing = true;
	while (keepGoing) {
		if (head.next == null) {
			keepGoing = false;
		}
		console.log(head.value);
		head = head.next;
	}
}

module.exports = {
	Node: Node,
	printList: printList
};